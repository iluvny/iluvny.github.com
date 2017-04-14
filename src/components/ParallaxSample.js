import React from 'react';
import { Well } from 'react-bootstrap';
import { Parallax, Background } from 'react-parallax';

class ParallaxSample extends React.Component {

    render() {
        return (
            <div className="nak-content">
                <div className="nak-post-container white-box">
                    <span className="white-box-title">React Parallax</span>
                    <p>React Parallax를 소개합니다. 아래 이미지 먼저 봐주세요.</p>
                </div>
                <Parallax bgImage="images/face_02.jpg" strength={500}>
                    <div style={{
                        width: 800,
                        height: 800
                        }}></div>
                </Parallax>
                <br />
                <Parallax bgImage="images/bg_01.jpg" strength={100}>
                    <div style={{
                        width: 800,
                        height: 800
                        }}></div>
                </Parallax>
                <div className="nak-post-container white-box">
                    <Well>
                        Parallax는 웹 사이트에서 제품을 홍보하는 데에 자주 사용되는 디자인 개념입니다.
                        1990년대 초중반에 웹 사이트의 애니메이션을 위한 매우 전통적인 기술에 기초하고 있습니다.
                        Parallax는 서로 다른 레이어의 아트를 다른 속도로 움직여 깊이있는 느낌을 주는 데 사용됩니다.
                        이 아이디어는 2D 게임의 출현과 side scrolling 효과를 위한 브라우저 기반의 게임들의 인기에서 비롯됐습니다.
                    </Well>
                    <p>
                        위의 이미지에 사용한 것은 <a href="https://www.npmjs.com/package/react-parallax">react-parallax</a>입니다. 간단하게 이미지에 Parallax를 적용해볼 수 있는 React component입니다.
                        <br/>
                    </p>
                    <p>
                        사실 더 멋있는 component도 있습니다. 참고해보세요~ (<a href="http://gilbox.github.io/react-spark-scroll/examples/demo/demo.html">link</a>)
                    </p>
                    <p>
                        그리고 React와는 상관없지만 정말 Parallax를 멋있게 적용한 사이트도 많이 있습니다.<br/>
                        <ul>
                            <li><a href="http://gardenestudio.com.br/index.php">http://gardenestudio.com.br/index.php</a></li>
                            <li><a href="http://myriad.space/">http://myriad.space/</a><br/></li>
                            <li><a href="http://www.firewatchgame.com/">http://www.firewatchgame.com/</a><br/></li>
                        </ul>
                    </p>
                </div>
            </div>
        );
    }
}

export default ParallaxSample;