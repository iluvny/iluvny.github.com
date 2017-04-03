import React from 'react';

const email = 'mucikan@gmail.com';

class Content extends React.Component {
    render() {
        let mailto = `mailto:${email}`;

        return (
            <div className="nak-content">
                <div className="nak-content-container">
                    <div className="nak-content-top white-box">
                        <a className="email" href={ mailto }>{ email }</a>
                        <p>안녕하세요. Web이 재밌는 개발자 Nak입니다. 이 페이지는 ECMAScript 6와 React를 활용하여 만들었습니다.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;