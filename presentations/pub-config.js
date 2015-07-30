var opts = module.exports = {

  pkgs: ['pub-theme-shower-ribbon', 'pub-pkg-highlight'],

  sources: [
    {
      path:'.',
      glob:'**/*.md',
      writable:true
    }
  ],

  //scans everything beneath path
  staticPaths: [ '../static' , './static' ],

  // path to extra stylesheet
  injectCss: [ '/css/extra.css' ],

  // don't forget photo credit
  //photoCredit: 'Cover Photo by Jurgen Leschner, github.com/jldec',

  // copyright comment
  //copyright: 'Copyright © 2015 Hard Working Person',

  // ask search engines not to crawl this site
  //noRobots: true
}
