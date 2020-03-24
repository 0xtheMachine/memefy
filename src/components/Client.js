import React from 'react';

export default class Client extends React.Component {

  disclaimer = () => {
    console.log(
      "%c This is intended solely for developers. If someone has asked you to copy/paste something here they are likely scamming you, and your data might be compromised.", "font-size: 12pt; font-weight: 400"
    );
  }

  componentDidMount() {
    this.disclaimer();
  }

    render() {
        return (
          <div>
            <section>
              <div>Header</div>
            </section>
            <section>
                <div>Body Left</div>
                <div>Body Right</div>
            </section>
            <section>
                <div>
                    Footer
                </div>
            </section>
          </div>
        );
    }
}