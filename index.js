
  checkLoginStatus = function() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log('User is logged in.');
        const accessToken = response.authResponse.accessToken;
        console.log(`Access Token: ${accessToken}`);
        FB.api('/me', {
          fields: 'id,name,email,picture'
        }, function(response) {
          console.log(`Logged in user: ${response.name}`);
          const profilePic = document.createElement('img');
          profilePic.src = response.picture.data.url;
          document.body.appendChild(profilePic);
        });
      } else {
        console.log('User is not logged in.');
      }
    });
  };

  document.getElementById('show-credentials').addEventListener('click', checkLoginStatus);
