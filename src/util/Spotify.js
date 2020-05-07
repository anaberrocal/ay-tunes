const clientID = "b3ccd5eb220b4ba58c5da64bfe938ee5";
const redirectUri = "http://localhost:3000/";

let accessToken;

const Spotify = {
    getAccessToken(){
        if(accessToken) {
            return accessToken;
        } 
        //check URL for accessToken:
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            //reset parameters for access token
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');   
            return accessToken;     
        } else if(!accessToken) {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },

    search(term){
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, { headers: {Authorization: `Bearer ${accessToken}`}})
        .then(response=> {
           return response.json();
        })
        .then(jsonResponse=> {
            if(!jsonResponse.tracks) {
                return [];
            } return jsonResponse.tracks.items.map(track=> (
                {
                id: track.id,
                name: track.name,
                artists: track.artists[0].name,
                album: track.album.name,
                uri: track.uri,
                }
            ))
        })
    },

    savePlaylist(name, trackURIs) {
        if (!name || !trackURIs.length) {
            return;
        } 
        const accessToken = Spotify.getAccessToken();
        const headers =  {Authorization: `Bearer ${accessToken}`};
        let userId;

        return fetch('https://api.spotify.com/v1/me', {headers: headers})
        .then(response => {
            console.log(response)
            return response.json();
        })
        .then(jsonResponse=> {
            console.log(jsonResponse)
            userId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
            {
                headers: headers,
                method: 'POST',
                body: JSON.stringify( { name: name }),
            }).then(response=> {
                
               return response.json();
            })
            .then(jsonResponse=>{
                console.log(jsonResponse)
                const playlistId = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
                {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify( { uris: trackURIs}),
                })
            })
        })
    }
}

export default Spotify;
