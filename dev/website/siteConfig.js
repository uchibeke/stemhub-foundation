/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
];
const base = "https://uchi.me/stemhubfoundation.com/"

const siteConfig = {
  title: 'STEMHub Foundation | Empowerment Through STEM Education' /* title for your website */,
  tagline: 'STEMHub Foundation founded by Dr. Adeola Olubamiji in July 2017, is a non-profit organization dedicated to stimulating interest in STEM and raising future STEM leaders from minority communities, and increasing the number of women and minorities in STEM careers.',
  url: 'https://stemhubfoundation.com/' /* your website url */,
  baseUrl: '/',
  // baseUrl: 'https://uchi.me/stemhubfoundation.com/' /* base url for your project */,
  customDocsPath:'about',

  // Used for publishing and more
  projectName: 'stemhubfoundation.com',
  organizationName: 'STEMhub',  
  headerLinks: [
    {doc: 'meet-us', label: 'About'},
    {doc: 'get-involved', label: 'Programs'},
    {doc: 'stemming', label: 'STEMing'},
    {doc: 'stemstars', label: 'STEMstars'},
    {doc: 'stemspires', label: 'STEMSpires'},
    // { href: "https://vendor.lushplans.com/", label: "Vendors" },
    {blog: true, label: 'Blog'},
    // {doc: 'culture', label: 'Careers'},
    // {doc: 'why', label: 'Why Us'},
    // { href: "culture", label: "Careers" },
    // {page: 'help', label: 'Help'},
    // {page: 'career', label: 'Career page'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo_cropped.png',
  footerIcon: 'img/logo_cropped.png',
  favicon: 'img/logo_cropped.png',

  /* colors for website */
  colors: {
    primaryColor: '#FF4000',
    secondaryColor: '#d63200',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' STEMHub Foundation',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/logo.png',
  twitterImage: 'img/logo.png',
  gaTrackingId: "UA-119585041-1",
  twitter: 'true',
  blogSidebarCount: 'ALL',
  disableHeaderTitle:'true',
  stylesheets:[
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
  base + 'css/style.css',
  base + 'css/main.css'
  ],
  onPageNav: 'separate'
};

module.exports = siteConfig;

// {
//   "careers": {
//     "The Company": ["culture"],
//     "Jobs - Business": ["marketing-intern"],
//     "Jobs - Engineering": ["fullstack-developer-2", "fullstack-developer-1"]
//   }
// }

