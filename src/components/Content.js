import React from 'react';

const email = 'mucikan@gmail.com';

class Content extends React.Component {
    render() {
        let mailto = `mailto:${email}`;
        let posts = [{
            title: 'Test Post',
            date: 'Mar 03, 2017'
        }, {
            title: 'Test Post2',
            date: 'Mar 04, 2017'
        }];

        return (
            <div className="nak-content">
                <div className="nak-content-container">
                    <div className="nak-content-top white-box">
                        <a className="email" href={ mailto }>{ email }</a>
                        <p>안녕하세요. Web이 재밌는 개발자 Nak입니다. 이 페이지는 ECMAScript 6와 React를 활용하여 만들었습니다.</p>
                    </div>
                    <div className="nak-post-container white-box">
                        <span className="white-box-title">Posts</span>
                        <ul className="nak-post-list">
                            {
                                posts.map((post, i) => {
                                    return (
                                        <li key={ i }>
                                            <span className="nak-post-right-item">{ post.date }</span>
                                            <a className="nak-post-link" href="#">{ post.title }</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;