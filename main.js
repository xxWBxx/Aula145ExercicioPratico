document.getElementById('screenSize').innerHTML = "Tamanho da Tela: " + window.screen.width + "x" + window.screen.height;

       
        document.getElementById('colorDepth').innerHTML = "Profundidade de Cores: " + window.screen.colorDepth + " bits";

        
        document.getElementById('pageLocation').innerHTML = "Localização: " + window.location.href;

        
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                document.getElementById('geoLocation').innerHTML = "Latitude: " + latitude + ", Longitude: " + longitude;
            });
        } else {
            document.getElementById('geoLocation').innerHTML = "Geolocalização não suportada neste navegador.";
        }