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
        const token = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, { headers: {Authorization: `Bearer ${token}`}}

        ).then(response=> response.json())

        .then(jsonResponse=>{
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
    }

    // //   const token = Spotify.getAccessToken();
    // const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, { headers: { Authorization: `Bearer ${token}` } });
    // const jsonResponse = await response.json();
    // if (!jsonResponse.tracks) {
    //     return [];
    // }
    // return jsonResponse.tracks.items.map(track => {
    //     id: track.id;
    //     name: track.name;
    //     Artist: track.artists[0].name;
    //     Album: track.album.name;
    //     URI: track.uri;
    // });


}

export default Spotify;
