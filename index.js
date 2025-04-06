window.fbAsyncInit = function() {
  FB.init({
    appId            : '184538382745930',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v3.2'
  });
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      FB.api('/me', {
        fields: 'id,name,email,picture'
      }, function(response) {
        console.log(`Logged in user: ${response.name}`);
        const profilePic = document.createElement('img');
        profilePic.src = response.picture.data.url;
        document.body.appendChild(profilePic);
      });
    }
  });
};

