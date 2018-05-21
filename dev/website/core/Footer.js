/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(url, language) {
    const baseUrl = this.props.config.baseUrl;
    return url.indexOf('https') < 0 
      ? baseUrl + 'docs/' + (language ? language + '/' : '') + url
      : url;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Our Work</h5>
            <a href="stemming.html"> STEMing</a>
            <a href="stemstars.html"> STEMstars</a>
            <a href="stemspires.html"> STEMSpires</a>
          </div>
          <div>
            <h5>About us</h5>
            <a href="meet-us.html"> Our Mission</a>
            <a href="meet-us.html#meet-our-founder"> Our Founder</a>
            <a href="stemspires.html"> Our Blog</a>
          </div>
          <div>
            <h5>Get Involved</h5>
            <a href="get-involved.html"> Donate</a>
            <a href="get-involved.html#founder"> Book us</a>
            <a href="get-involved.html"> Attend event</a>
          </div>
        </section>
        
        <section className="copyright">{this.props.config.copyright}
      </section>
      </footer>
    );
  }
}

module.exports = Footer;
