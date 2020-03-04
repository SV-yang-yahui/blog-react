import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { GithubOutlined } from '@ant-design/icons';

const CommonFooter =()=> 
    <DefaultFooter
      copyright="2020 九亭技术部出品"
      links={[
        {
          key: 'jiuting',
          title: '九亭青年',
          href: '#javascript:;',
          blankTarget: false,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/yangyahuiOnline/blog-react',
          blankTarget: true,
        },
        {
          key: 'bloglab',
          title: 'BlogLab',
          href: '#javascript:;',
          blankTarget: false,
        },
      ]}
    />

    export default CommonFooter
    ;