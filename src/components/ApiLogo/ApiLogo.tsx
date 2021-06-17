import { observer } from 'mobx-react';
import * as React from 'react';
import { Heading } from '../../common-elements/headers';
import { OpenAPIInfo } from '../../types';
import { LinkWrap, LogoImgEl, LogoWrap } from './styled.elements';

const Xlogo = ({ logoInfo, info }) => {
  const logoHref = logoInfo.href || (info.contact && info.contact.url);

  // Use the english word logo if no alt text is provided
  const altText = logoInfo.altText ? logoInfo.altText : 'logo';

  const logo = <LogoImgEl src={logoInfo.url} alt={altText} />;
  return (
    <LogoWrap style={{ backgroundColor: logoInfo.backgroundColor }}>
      {logoHref ? LinkWrap(logoHref)(logo) : logo}
    </LogoWrap>
  );
};

@observer
export class ApiLogo extends React.Component<{ info: OpenAPIInfo }> {
  render() {
    const { info } = this.props;
    const logoInfo = info['x-logo'];
    const hasXLogo = logoInfo && logoInfo.url;

    return hasXLogo ? (
      <Xlogo logoInfo={logoInfo} info={info} />
    ) : (
      <div style={{ margin: 16, marginTop: 24, marginBottom: 0 }}>
        <Heading as="h1">Engines API Docs</Heading>
      </div>
    );
  }
}
