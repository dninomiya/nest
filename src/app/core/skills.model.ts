export const Skills = [
  {
    id: 'bem',
    label: 'BEM',
    type: 'front'
  },
  {
    id: 'html_valid',
    label: 'HTML バリデーション',
    type: 'front'
  },
  {
    id: 'pixel_perfect',
    label: 'ピクセルパーフェクト',
    type: 'front'
  },
  {
    id: 'rwd',
    label: 'RWD',
    type: 'front'
  },
  {
    id: 'ajax',
    label: 'Ajax',
    type: 'front'
  },
  {
    id: 'windows',
    label: 'Windows',
    type: 'basic'
  },
  {
    id: 'typing',
    label: 'ブラインドタッチ',
    type: 'basic'
  },
  {
    id: 'docker',
    label: 'Docker',
    type: 'basic'
  },
  {
    id: 'unix',
    label: 'UNIXコマンド',
    type: 'basic'
  },
  {
    id: 'cui',
    label: 'ターミナル/コマンドプロンプト',
    type: 'basic'
  },
  {
    id: 'mac',
    label: 'mac',
    type: 'basic'
  },
  {
    id: 'es6',
    label: 'ES6',
    type: 'front'
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    type: 'front'
  },
  {
    id: 'wordpress',
    label: 'WordPress',
    type: 'front'
  },
  {
    id: 'swift',
    label: 'Swift',
    type: 'native'
  },
  {
    id: 'kotlin',
    label: 'Kotln',
    type: 'native'
  },
  {
    id: 'mysql',
    label: 'MySQL',
    type: 'back'
  },
  {
    id: 'aws',
    label: 'AWS',
    type: 'back'
  },
  {
    id: 'gcp',
    label: 'Google CloudP latform',
    type: 'back'
  },
  {
    id: 'mongodb',
    label: 'MongoDB',
    type: 'back'
  },
  {
    id: 'gulp',
    label: 'Gulp',
    type: 'front'
  },
  {
    id: 'git',
    label: 'Git',
    type: 'basic'
  },
  {
    id: 'github',
    label: 'GitHub',
    type: 'basic'
  },
  {
    id: 'gitlab',
    label: 'GitLab',
    type: 'basic'
  },
  {
    id: 'svn',
    label: 'SVN',
    type: 'basic'
  },
  {
    id: 'laravel',
    label: 'Laravel',
    type: 'back'
  },
  {
    id: 'php',
    label: 'PHP',
    type: 'back'
  },
  {
    id: 'ruby',
    label: 'Ruby',
    type: 'back'
  },
  {
    id: 'rails',
    label: 'Rails',
    type: 'back'
  },
  {
    id: 'node',
    label: 'Node.js',
    type: 'back'
  },
  {
    id: 'java',
    label: 'Java',
    type: 'back'
  },
  {
    id: 'vsc',
    label: 'Visual Studio Code',
    type: 'basic'
  },
  {
    id: 'photoshop',
    label: 'Photo Shop',
    type: 'design'
  },
  {
    id: 'illustrator',
    label: 'Illustrator',
    type: 'design'
  },
  {
    id: 'adobexd',
    label: 'AdobeXD',
    type: 'design'
  },
  {
    id: 'direction',
    label: 'ディレクター',
    type: 'management'
  },
  {
    id: 'tech_direction',
    label: 'テクニカルディレクター',
    type: 'management'
  },
  {
    id: 'psd_slice',
    label: 'PSDのコーディング起こし',
    type: 'front'
  },
  {
    id: 'react',
    label: 'React',
    type: 'front'
  },
  {
    id: 'vue',
    label: 'Vue',
    type: 'front'
  },
  {
    id: 'angular',
    label: 'Angular',
    type: 'front'
  },
  {
    id: 'jquery',
    label: 'jQuery',
    type: 'front'
  },
  {
    id: 'project_manager',
    label: 'プロジェクトマネージャー',
    type: 'management'
  },
  {
    id: 'data_science',
    label: 'データサイエンス',
    type: 'data'
  },
  {
    id: 'tensorflow',
    label: 'Tensorflow',
    type: 'data'
  },
  {
    id: 'ai',
    label: '機械学習',
    type: 'data'
  },
  {
    id: 'gtm',
    label: 'GoogleTagManager',
    type: 'data'
  },
  {
    id: 'ga',
    label: 'GoogleAnalytics',
    type: 'data'
  },
  {
    id: 'sns',
    label: 'SNSマーケティング',
    type: 'data'
  },
  {
    id: 'ab',
    label: 'ABテスト',
    type: 'data'
  },
];

export const SkillsModel = (() => {
  const types = Skills
    .map(skill => skill.type)
    .filter((type, index, self) => self.indexOf(type) === index);

  const result = {};
  types.forEach(type => {
    result[type] = Skills.filter(skill => skill.type === type);
  });

  return result;
})();
