import React, { Component } from 'react';
import NavButton from '../NavButton';

class Promo extends Component {
    render() {
        return (
            <div >
                <div className="Menu">
                    <a href="Home.html"><img src="mysl.png" alt="my_sl.png" width="60px" height="80px" /><br /></a>
                    <NavButton className="tablinks" title="Home" route="/" />
                    <NavButton className="tablinks" title="My Package" route="/package" />
                    <NavButton className="tablinks" title="Promo" route="/promo" />
                    <NavButton className="tablinks" title="Feedback" route="/feedback" />
                    <NavButton className="login_button" title="Logout" route="/Login" />
                    
                </div>
                <div className="mypromo">
                    <video autoPlay loop width={480} height={360}>
                        <source src="Promo.mp4" type="video/mp4" />
                    </video>
                    <div className="textpromo">
                        <h1>PROMO</h1><h2>5G</h2>
                        <p>Our New 5G Technology will have some key features such as :<br /><br /> <b>Faster Speeds </b> - The new 5G is set to be much faster than previous generation networks it can like 100 times faster than existing 4G networks. To get more specific, 5G may offer speeds as fast as 10Gb/s. This would mean the ability to download a full HD movie in under 10 seconds on a 5G network, compared to 10 minutes on 4G. Some estimates see 5G being even faster than that.<br /><br /><b>Lower Latency</b> - The 5G will also have much lower latency. So that there is much less delay or lag when we’re using our phones and other devices. With 4G networks, latency is typically around 40-50 milliseconds. With 5G it should be 1 millisecond or less, which is undetectable to the user.<br /><br /><b>Greater Capacity</b> - 5G will have greater capacity, meaning the networks will be able to cope better with many high-demand applications all at once - from connected cars and IoT (Internet of Things) devices to virtual reality experiences and simultaneous HD video streaming.</p><br /><br />
                    </div>
                    <div className="banner">
                        <div className="promo-banner-track" aria-label="Current promotional banners">
                            <img src="banner1.jpg" alt="5G promotion banner 1" />
                            <img src="banner2.png" alt="5G promotion banner 2" />
                            <img src="banner3.jpg" alt="5G promotion banner 3" />
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="footer">
                        <p>Copyright © 2019 SL Asiata. All Rights Reserved. </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Promo;
