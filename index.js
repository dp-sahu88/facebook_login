
  checkLoginStatus = function() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log('User is logged in.');
        const accessToken = response.authResponse.accessToken;
        const responseDiv = document.createElement('div');
        responseDiv.innerHTML = `
          <p>Access Token: ${accessToken}</p>
        `;
        document.body.appendChild(responseDiv);

        FB.api('/me', {
          fields: 'id,name,email,picture'
        }, function(response) {
          const profilePic = document.createElement('img');
          profilePic.src = response.picture.data.url;
          document.body.appendChild(document.createElement('br'));
          document.body.appendChild(document.createElement('br'));
          document.body.appendChild(profilePic);
          const profileInfo = document.createElement('div');
          profileInfo.innerHTML = `Name: ${response.name}<br>ID: ${response.id}<br>Email: ${response.email}`;
          document.body.appendChild(profileInfo);
        });

      } else {
        console.log('User is not logged in.');
      }
    });
  };

  document.getElementById('show-credentials').addEventListener('click', checkLoginStatus);
