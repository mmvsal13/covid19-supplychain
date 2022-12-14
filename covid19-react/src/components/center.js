import React from 'react';
import { Link } from 'react-router-dom';

function Center(props) {
/*
position: 'absolute',
            left: '87.37%%',
            top: '26.94%',
            right: '-56.43%',
            bottom: '16.45%',
            transform: 'matrix(-0.99, -0.15, -0.15, 0.99, 0, 0)'
*/
    return (
        <div style = {{
            position: 'absolute',
            zIndex: '0',
            margin: 'auto',
            top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)' 
        }}>

<svg width="1156" height="917" viewBox="0 0 1156 917" fill="none" position="absolute" zIndex="1" margin= "auto" xmlns="http://www.w3.org/2000/svg">
<path d="M532.099 218.692C297.657 150.434 188.137 225.24 165.764 261.786C72.5969 311.867 77.5116 452.391 129.188 516.239C180.865 580.087 268.964 545.359 308.836 596.709C348.708 648.059 342.007 691.607 801.744 681.929C1169.53 674.186 1094.18 410.804 1010.52 280.081C986.477 252.719 921.015 202.67 851.537 221.372C782.059 240.075 611.684 221.119 532.099 218.692Z" fill="#FFC978" fill-opacity="0.4"/>
<path d="M480.683 237.495C229.075 202.659 130.343 298.766 113.923 340.798C27.5439 408.276 57.3371 555.513 121.4 614.596C185.463 673.678 269.37 623.172 319.166 670.956C368.963 718.74 369.792 765.669 837.89 682.798C1212.37 616.502 1088.93 350.993 980.404 226.526C951.008 201.506 875.291 159.138 807.588 189.821C739.885 220.503 562.438 227.471 480.683 237.495Z" fill="#FADEB5" fill-opacity="0.4"/>
<path d="M666.544 178.599C906.091 104.668 1021.58 177.096 1045.89 213.21C1143.69 261.233 1143.34 402.23 1092.18 467.452C1041.02 532.675 948.971 499.925 909.568 552.34C870.164 604.756 878.541 648.258 403.966 649.338C24.305 650.203 93.1845 384.383 175.082 251.365C198.967 223.37 264.812 171.658 337.112 188.779C409.413 205.899 584.529 182.899 666.544 178.599Z" fill="#FADEB5" fill-opacity="0.4"/>
</svg>

        


    
</div>
       
    );
}

export default Center;