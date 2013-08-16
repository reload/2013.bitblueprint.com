


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery.scrollTo/jquery.scrollTo.js at master · flesler/jquery.scrollTo</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe18.rs.github.com">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.32) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="1243959" name="octolytics-actor-id" /><meta content="kraenhansen" name="octolytics-actor-login" /><meta content="35481162ddd805652dba23157eaa844aad3ca7fd973198f6067795a443228839" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="OSm3LLBv/f+R+d5uw+PAFDotuFBh5cXcIkG1rD4if8Q=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-38f46d85628d47804a71c854d527f719e1298383.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-f4e6ed6e93eb3267c8c498cf7557d61d1fa6e357.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-eae23340ab2a6ba722166712e699c87aaf60ad8f.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-cdd798cab1981f0f1f906696b294fd286c0f02db.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="b5f8e22a8b2b3beed6bc233f38e13347">

        <link data-pjax-transient rel='permalink' href='/flesler/jquery.scrollTo/blob/83776e51617d391c79e0d4d876ecc309a5bb88d5/jquery.scrollTo.js'>
  <meta property="og:title" content="jquery.scrollTo"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/flesler/jquery.scrollTo"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="Contribute to jquery.scrollTo development by creating an account on GitHub."/>

  <meta name="description" content="Contribute to jquery.scrollTo development by creating an account on GitHub." />

  <meta content="38258" name="octolytics-dimension-user_id" /><meta content="flesler" name="octolytics-dimension-user_login" /><meta content="4617120" name="octolytics-dimension-repository_id" /><meta content="flesler/jquery.scrollTo" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4617120" name="octolytics-dimension-repository_network_root_id" /><meta content="flesler/jquery.scrollTo" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/flesler/jquery.scrollTo/commits/master.atom" rel="alternate" title="Recent Commits to jquery.scrollTo:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob linux vis-public env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

    
  <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have unread notifications">
    <span class="mail-status unread"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="kraenhansen"
      data-repo="flesler/jquery.scrollTo"
      data-branch="master"
      data-sha="9182688ee27cd38a9b6c58524fbe5660785a874a"
  >

    <input type="hidden" name="nwo" value="flesler/jquery.scrollTo" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/kraenhansen" class="name">
        <img height="20" src="https://secure.gravatar.com/avatar/4cbaddfbb9a771f06aaf5357798f7dd9?s=140&amp;d=https%3A%2F%2Fidenticons.github.com%2F2bf5242aaf6f045dc5c7666077a03e13.png" width="20" /> kraenhansen
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="flesler/jquery.scrollTo">This repository</span>
    </li>
    <li>
      <a href="/flesler/jquery.scrollTo/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="OSm3LLBv/f+R+d5uw+PAFDotuFBh5cXcIkG1rD4if8Q=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="4617120" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/flesler/jquery.scrollTo/watchers">
          82
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/flesler/jquery.scrollTo/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/flesler/jquery.scrollTo/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/flesler/jquery.scrollTo/stargazers">922</a>
</div>

  </li>


        <li>
          <a href="/flesler/jquery.scrollTo/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/flesler/jquery.scrollTo/network" class="social-count">326</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/flesler" class="url fn" itemprop="url" rel="author"><span itemprop="title">flesler</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/flesler/jquery.scrollTo" class="js-current-repository js-repo-home-link">jquery.scrollTo</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/flesler/jquery.scrollTo" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /flesler/jquery.scrollTo">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/flesler/jquery.scrollTo/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /flesler/jquery.scrollTo/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>7</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/flesler/jquery.scrollTo/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /flesler/jquery.scrollTo/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>2</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/flesler/jquery.scrollTo/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /flesler/jquery.scrollTo/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/flesler/jquery.scrollTo/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /flesler/jquery.scrollTo/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/flesler/jquery.scrollTo/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /flesler/jquery.scrollTo/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/flesler/jquery.scrollTo/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /flesler/jquery.scrollTo/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/flesler/jquery.scrollTo.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/flesler/jquery.scrollTo.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:flesler/jquery.scrollTo.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:flesler/jquery.scrollTo.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/flesler/jquery.scrollTo" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/flesler/jquery.scrollTo" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>



                <a href="/flesler/jquery.scrollTo/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:88729c5b55f18188b4b6edd24afe2bb8 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:88729c5b55f18188b4b6edd24afe2bb8 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/flesler/jquery.scrollTo/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/blob/master/jquery.scrollTo.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/blob/1.4.6/jquery.scrollTo.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.6" data-skip-pjax="true" rel="nofollow" title="1.4.6">1.4.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/blob/1.4.5/jquery.scrollTo.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.5" data-skip-pjax="true" rel="nofollow" title="1.4.5">1.4.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/blob/1.4.4/jquery.scrollTo.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.4" data-skip-pjax="true" rel="nofollow" title="1.4.4">1.4.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/flesler/jquery.scrollTo/blob/1.4.3/jquery.scrollTo.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.4.3" data-skip-pjax="true" rel="nofollow" title="1.4.3">1.4.3</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/flesler/jquery.scrollTo" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery.scrollTo</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.scrollTo.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery.scrollTo.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/3949a5ad8edfd182cadc51822b2522f8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/flesler" rel="author">flesler</a></span>
    <time class="js-relative-date" datetime="2013-05-21T16:35:57-07:00" title="2013-05-21 16:35:57">May 21, 2013</time>
    <div class="commit-title">
        <a href="/flesler/jquery.scrollTo/commit/f3302f9d759c44e8232f0565aacbd2b90e1d5dc9" class="message" data-pjax="true">Fixed target setting passed to onAfter should be the DOM element or f…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="flesler" href="/flesler/jquery.scrollTo/commits/master/jquery.scrollTo.js?author=flesler"><img height="20" src="https://secure.gravatar.com/avatar/3949a5ad8edfd182cadc51822b2522f8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="JeffreyATW" href="/flesler/jquery.scrollTo/commits/master/jquery.scrollTo.js?author=JeffreyATW"><img height="20" src="https://secure.gravatar.com/avatar/217899ca10690e133dcb694e9a0dc26a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/3949a5ad8edfd182cadc51822b2522f8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/flesler">flesler</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/217899ca10690e133dcb694e9a0dc26a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/JeffreyATW">JeffreyATW</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>217 lines (187 sloc)</span>
        <span>7.765 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/flesler/jquery.scrollTo/edit/master/jquery.scrollTo.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/flesler/jquery.scrollTo/raw/master/jquery.scrollTo.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/flesler/jquery.scrollTo/blame/master/jquery.scrollTo.js" class="button minibutton ">Blame</a>
          <a href="/flesler/jquery.scrollTo/commits/master/jquery.scrollTo.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/flesler/jquery.scrollTo/delete/master/jquery.scrollTo.js"
               title="Fork this project and delete file" data-method="post" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * jQuery.ScrollTo</span></div><div class='line' id='LC3'><span class="cm"> * Copyright (c) 2007-2013 Ariel Flesler - aflesler&lt;a&gt;gmail&lt;d&gt;com | http://flesler.blogspot.com</span></div><div class='line' id='LC4'><span class="cm"> * Dual licensed under MIT and GPL.</span></div><div class='line' id='LC5'><span class="cm"> *</span></div><div class='line' id='LC6'><span class="cm"> * @projectDescription Easy element scrolling using jQuery.</span></div><div class='line' id='LC7'><span class="cm"> * http://flesler.blogspot.com/2007/10/jqueryscrollto.html</span></div><div class='line' id='LC8'><span class="cm"> * @author Ariel Flesler</span></div><div class='line' id='LC9'><span class="cm"> * @version 1.4.6</span></div><div class='line' id='LC10'><span class="cm"> *</span></div><div class='line' id='LC11'><span class="cm"> * @id jQuery.scrollTo</span></div><div class='line' id='LC12'><span class="cm"> * @id jQuery.fn.scrollTo</span></div><div class='line' id='LC13'><span class="cm"> * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.</span></div><div class='line' id='LC14'><span class="cm"> *	  The different options for target are:</span></div><div class='line' id='LC15'><span class="cm"> *		- A number position (will be applied to all axes).</span></div><div class='line' id='LC16'><span class="cm"> *		- A string position (&#39;44&#39;, &#39;100px&#39;, &#39;+=90&#39;, etc ) will be applied to all axes</span></div><div class='line' id='LC17'><span class="cm"> *		- A jQuery/DOM element ( logically, child of the element to scroll )</span></div><div class='line' id='LC18'><span class="cm"> *		- A string selector, that will be relative to the element to scroll ( &#39;li:eq(2)&#39;, etc )</span></div><div class='line' id='LC19'><span class="cm"> *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.</span></div><div class='line' id='LC20'><span class="cm"> *		- A percentage of the container&#39;s dimension/s, for example: 50% to go to the middle.</span></div><div class='line' id='LC21'><span class="cm"> *		- The string &#39;max&#39; for go-to-end. </span></div><div class='line' id='LC22'><span class="cm"> * @param {Number, Function} duration The OVERALL length of the animation, this argument can be the settings object instead.</span></div><div class='line' id='LC23'><span class="cm"> * @param {Object,Function} settings Optional set of settings or the onAfter callback.</span></div><div class='line' id='LC24'><span class="cm"> *	 @option {String} axis Which axis must be scrolled, use &#39;x&#39;, &#39;y&#39;, &#39;xy&#39; or &#39;yx&#39;.</span></div><div class='line' id='LC25'><span class="cm"> *	 @option {Number, Function} duration The OVERALL length of the animation.</span></div><div class='line' id='LC26'><span class="cm"> *	 @option {String} easing The easing method for the animation.</span></div><div class='line' id='LC27'><span class="cm"> *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.</span></div><div class='line' id='LC28'><span class="cm"> *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.</span></div><div class='line' id='LC29'><span class="cm"> *	 @option {Object, Number} over Add/deduct the height/width multiplied by &#39;over&#39;, can be { top:x, left:y } when using both axes.</span></div><div class='line' id='LC30'><span class="cm"> *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.</span></div><div class='line' id='LC31'><span class="cm"> *	 @option {Function} onAfter Function to be called after the scrolling ends. </span></div><div class='line' id='LC32'><span class="cm"> *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.</span></div><div class='line' id='LC33'><span class="cm"> * @return {jQuery} Returns the same jQuery object, for chaining.</span></div><div class='line' id='LC34'><span class="cm"> *</span></div><div class='line' id='LC35'><span class="cm"> * @desc Scroll to a fixed position</span></div><div class='line' id='LC36'><span class="cm"> * @example $(&#39;div&#39;).scrollTo( 340 );</span></div><div class='line' id='LC37'><span class="cm"> *</span></div><div class='line' id='LC38'><span class="cm"> * @desc Scroll relatively to the actual position</span></div><div class='line' id='LC39'><span class="cm"> * @example $(&#39;div&#39;).scrollTo( &#39;+=340px&#39;, { axis:&#39;y&#39; } );</span></div><div class='line' id='LC40'><span class="cm"> *</span></div><div class='line' id='LC41'><span class="cm"> * @desc Scroll using a selector (relative to the scrolled element)</span></div><div class='line' id='LC42'><span class="cm"> * @example $(&#39;div&#39;).scrollTo( &#39;p.paragraph:eq(2)&#39;, 500, { easing:&#39;swing&#39;, queue:true, axis:&#39;xy&#39; } );</span></div><div class='line' id='LC43'><span class="cm"> *</span></div><div class='line' id='LC44'><span class="cm"> * @desc Scroll to a DOM element (same for jQuery object)</span></div><div class='line' id='LC45'><span class="cm"> * @example var second_child = document.getElementById(&#39;container&#39;).firstChild.nextSibling;</span></div><div class='line' id='LC46'><span class="cm"> *			$(&#39;#container&#39;).scrollTo( second_child, { duration:500, axis:&#39;x&#39;, onAfter:function(){</span></div><div class='line' id='LC47'><span class="cm"> *				alert(&#39;scrolled!!&#39;);																   </span></div><div class='line' id='LC48'><span class="cm"> *			}});</span></div><div class='line' id='LC49'><span class="cm"> *</span></div><div class='line' id='LC50'><span class="cm"> * @desc Scroll on both axes, to different values</span></div><div class='line' id='LC51'><span class="cm"> * @example $(&#39;div&#39;).scrollTo( { top: 300, left:&#39;+=200&#39; }, { axis:&#39;xy&#39;, offset:-20 } );</span></div><div class='line' id='LC52'><span class="cm"> */</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'><span class="p">;(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">$</span> <span class="p">){</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>	<span class="kd">var</span> <span class="nx">$scrollTo</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">scrollTo</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">target</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">settings</span> <span class="p">){</span></div><div class='line' id='LC57'>		<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">scrollTo</span><span class="p">(</span> <span class="nx">target</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">settings</span> <span class="p">);</span></div><div class='line' id='LC58'>	<span class="p">};</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>	<span class="nx">$scrollTo</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC61'>		<span class="nx">axis</span><span class="o">:</span><span class="s1">&#39;xy&#39;</span><span class="p">,</span></div><div class='line' id='LC62'>		<span class="nx">duration</span><span class="o">:</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">jquery</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mf">1.3</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="mi">1</span><span class="p">,</span></div><div class='line' id='LC63'>		<span class="nx">limit</span><span class="o">:</span><span class="kc">true</span></div><div class='line' id='LC64'>	<span class="p">};</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>	<span class="c1">// Returns the element that needs to be animated to scroll the window.</span></div><div class='line' id='LC67'>	<span class="c1">// Kept for backwards compatibility (specially for localScroll &amp; serialScroll)</span></div><div class='line' id='LC68'>	<span class="nx">$scrollTo</span><span class="p">.</span><span class="nb">window</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">scope</span> <span class="p">){</span></div><div class='line' id='LC69'>		<span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">_scrollable</span><span class="p">();</span></div><div class='line' id='LC70'>	<span class="p">};</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'>	<span class="c1">// Hack, hack, hack :)</span></div><div class='line' id='LC73'>	<span class="c1">// Returns the real elements to scroll (supports window/iframes, documents and regular nodes)</span></div><div class='line' id='LC74'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">_scrollable</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC75'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC76'>			<span class="kd">var</span> <span class="nx">elem</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC77'>				<span class="nx">isWin</span> <span class="o">=</span> <span class="o">!</span><span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">||</span> <span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span> <span class="p">[</span><span class="s1">&#39;iframe&#39;</span><span class="p">,</span><span class="s1">&#39;#document&#39;</span><span class="p">,</span><span class="s1">&#39;html&#39;</span><span class="p">,</span><span class="s1">&#39;body&#39;</span><span class="p">]</span> <span class="p">)</span> <span class="o">!=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>				<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="nx">isWin</span> <span class="p">)</span></div><div class='line' id='LC80'>					<span class="k">return</span> <span class="nx">elem</span><span class="p">;</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>			<span class="kd">var</span> <span class="nx">doc</span> <span class="o">=</span> <span class="p">(</span><span class="nx">elem</span><span class="p">.</span><span class="nx">contentWindow</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">).</span><span class="nb">document</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">ownerDocument</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">;</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'>			<span class="k">return</span> <span class="sr">/webkit/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">)</span> <span class="o">||</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">compatMode</span> <span class="o">==</span> <span class="s1">&#39;BackCompat&#39;</span> <span class="o">?</span></div><div class='line' id='LC85'>				<span class="nx">doc</span><span class="p">.</span><span class="nx">body</span> <span class="o">:</span> </div><div class='line' id='LC86'>				<span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">;</span></div><div class='line' id='LC87'>		<span class="p">});</span></div><div class='line' id='LC88'>	<span class="p">};</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">scrollTo</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">target</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">settings</span> <span class="p">){</span></div><div class='line' id='LC91'>		<span class="k">if</span><span class="p">(</span> <span class="k">typeof</span> <span class="nx">duration</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span> <span class="p">){</span></div><div class='line' id='LC92'>			<span class="nx">settings</span> <span class="o">=</span> <span class="nx">duration</span><span class="p">;</span></div><div class='line' id='LC93'>			<span class="nx">duration</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC94'>		<span class="p">}</span></div><div class='line' id='LC95'>		<span class="k">if</span><span class="p">(</span> <span class="k">typeof</span> <span class="nx">settings</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span> <span class="p">)</span></div><div class='line' id='LC96'>			<span class="nx">settings</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">onAfter</span><span class="o">:</span><span class="nx">settings</span> <span class="p">};</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>		<span class="k">if</span><span class="p">(</span> <span class="nx">target</span> <span class="o">==</span> <span class="s1">&#39;max&#39;</span> <span class="p">)</span></div><div class='line' id='LC99'>			<span class="nx">target</span> <span class="o">=</span> <span class="mi">9</span><span class="nx">e9</span><span class="p">;</span></div><div class='line' id='LC100'><br/></div><div class='line' id='LC101'>		<span class="nx">settings</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="p">{},</span> <span class="nx">$scrollTo</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">settings</span> <span class="p">);</span></div><div class='line' id='LC102'>		<span class="c1">// Speed is still recognized for backwards compatibility</span></div><div class='line' id='LC103'>		<span class="nx">duration</span> <span class="o">=</span> <span class="nx">duration</span> <span class="o">||</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">duration</span><span class="p">;</span></div><div class='line' id='LC104'>		<span class="c1">// Make sure the settings are given right</span></div><div class='line' id='LC105'>		<span class="nx">settings</span><span class="p">.</span><span class="nx">queue</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">queue</span> <span class="o">&amp;&amp;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">axis</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>		<span class="k">if</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">queue</span> <span class="p">)</span></div><div class='line' id='LC108'>			<span class="c1">// Let&#39;s keep the overall duration</span></div><div class='line' id='LC109'>			<span class="nx">duration</span> <span class="o">/=</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC110'>		<span class="nx">settings</span><span class="p">.</span><span class="nx">offset</span> <span class="o">=</span> <span class="nx">both</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">offset</span> <span class="p">);</span></div><div class='line' id='LC111'>		<span class="nx">settings</span><span class="p">.</span><span class="nx">over</span> <span class="o">=</span> <span class="nx">both</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">over</span> <span class="p">);</span></div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_scrollable</span><span class="p">().</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC114'>			<span class="c1">// Null target yields nothing, just like jQuery does</span></div><div class='line' id='LC115'>			<span class="k">if</span> <span class="p">(</span><span class="nx">target</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>			<span class="kd">var</span> <span class="nx">elem</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC118'>				<span class="nx">$elem</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">elem</span><span class="p">),</span></div><div class='line' id='LC119'>				<span class="nx">targ</span> <span class="o">=</span> <span class="nx">target</span><span class="p">,</span> <span class="nx">toff</span><span class="p">,</span> <span class="nx">attr</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC120'>				<span class="nx">win</span> <span class="o">=</span> <span class="nx">$elem</span><span class="p">.</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;html,body&#39;</span><span class="p">);</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>			<span class="k">switch</span><span class="p">(</span> <span class="k">typeof</span> <span class="nx">targ</span> <span class="p">){</span></div><div class='line' id='LC123'>				<span class="c1">// A number will pass the regex</span></div><div class='line' id='LC124'>				<span class="k">case</span> <span class="s1">&#39;number&#39;</span><span class="o">:</span></div><div class='line' id='LC125'>				<span class="k">case</span> <span class="s1">&#39;string&#39;</span><span class="o">:</span></div><div class='line' id='LC126'>					<span class="k">if</span><span class="p">(</span> <span class="sr">/^([+-]=?)?\d+(\.\d+)?(px|%)?$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">targ</span><span class="p">)</span> <span class="p">){</span></div><div class='line' id='LC127'>						<span class="nx">targ</span> <span class="o">=</span> <span class="nx">both</span><span class="p">(</span> <span class="nx">targ</span> <span class="p">);</span></div><div class='line' id='LC128'>						<span class="c1">// We are done</span></div><div class='line' id='LC129'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC130'>					<span class="p">}</span></div><div class='line' id='LC131'>					<span class="c1">// Relative selector, no break!</span></div><div class='line' id='LC132'>					<span class="nx">targ</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">targ</span><span class="p">,</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC133'>					<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">targ</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC134'>				<span class="k">case</span> <span class="s1">&#39;object&#39;</span><span class="o">:</span></div><div class='line' id='LC135'>					<span class="c1">// DOMElement / jQuery</span></div><div class='line' id='LC136'>					<span class="k">if</span><span class="p">(</span> <span class="nx">targ</span><span class="p">.</span><span class="nx">is</span> <span class="o">||</span> <span class="nx">targ</span><span class="p">.</span><span class="nx">style</span> <span class="p">)</span></div><div class='line' id='LC137'>						<span class="c1">// Get the real position of the target </span></div><div class='line' id='LC138'>						<span class="nx">toff</span> <span class="o">=</span> <span class="p">(</span><span class="nx">targ</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">targ</span><span class="p">)).</span><span class="nx">offset</span><span class="p">();</span></div><div class='line' id='LC139'>			<span class="p">}</span></div><div class='line' id='LC140'>			<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">axis</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">axis</span> <span class="p">){</span></div><div class='line' id='LC141'>				<span class="kd">var</span> <span class="nx">Pos</span>	<span class="o">=</span> <span class="nx">axis</span> <span class="o">==</span> <span class="s1">&#39;x&#39;</span> <span class="o">?</span> <span class="s1">&#39;Left&#39;</span> <span class="o">:</span> <span class="s1">&#39;Top&#39;</span><span class="p">,</span></div><div class='line' id='LC142'>					<span class="nx">pos</span> <span class="o">=</span> <span class="nx">Pos</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">(),</span></div><div class='line' id='LC143'>					<span class="nx">key</span> <span class="o">=</span> <span class="s1">&#39;scroll&#39;</span> <span class="o">+</span> <span class="nx">Pos</span><span class="p">,</span></div><div class='line' id='LC144'>					<span class="nx">old</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span></div><div class='line' id='LC145'>					<span class="nx">max</span> <span class="o">=</span> <span class="nx">$scrollTo</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">elem</span><span class="p">,</span> <span class="nx">axis</span><span class="p">);</span></div><div class='line' id='LC146'><br/></div><div class='line' id='LC147'>				<span class="k">if</span><span class="p">(</span> <span class="nx">toff</span> <span class="p">){</span><span class="c1">// jQuery / DOMElement</span></div><div class='line' id='LC148'>					<span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">toff</span><span class="p">[</span><span class="nx">pos</span><span class="p">]</span> <span class="o">+</span> <span class="p">(</span> <span class="nx">win</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">old</span> <span class="o">-</span> <span class="nx">$elem</span><span class="p">.</span><span class="nx">offset</span><span class="p">()[</span><span class="nx">pos</span><span class="p">]</span> <span class="p">);</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>					<span class="c1">// If it&#39;s a dom element, reduce the margin</span></div><div class='line' id='LC151'>					<span class="k">if</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">margin</span> <span class="p">){</span></div><div class='line' id='LC152'>						<span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">-=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">targ</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;margin&#39;</span><span class="o">+</span><span class="nx">Pos</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC153'>						<span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">-=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">targ</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;border&#39;</span><span class="o">+</span><span class="nx">Pos</span><span class="o">+</span><span class="s1">&#39;Width&#39;</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC154'>					<span class="p">}</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>					<span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">+=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">offset</span><span class="p">[</span><span class="nx">pos</span><span class="p">]</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'>					<span class="k">if</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">over</span><span class="p">[</span><span class="nx">pos</span><span class="p">]</span> <span class="p">)</span></div><div class='line' id='LC159'>						<span class="c1">// Scroll to a fraction of its width/height</span></div><div class='line' id='LC160'>						<span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">+=</span> <span class="nx">targ</span><span class="p">[</span><span class="nx">axis</span><span class="o">==</span><span class="s1">&#39;x&#39;</span><span class="o">?</span><span class="s1">&#39;width&#39;</span><span class="o">:</span><span class="s1">&#39;height&#39;</span><span class="p">]()</span> <span class="o">*</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">over</span><span class="p">[</span><span class="nx">pos</span><span class="p">];</span></div><div class='line' id='LC161'>				<span class="p">}</span><span class="k">else</span><span class="p">{</span> </div><div class='line' id='LC162'>					<span class="kd">var</span> <span class="nx">val</span> <span class="o">=</span> <span class="nx">targ</span><span class="p">[</span><span class="nx">pos</span><span class="p">];</span></div><div class='line' id='LC163'>					<span class="c1">// Handle percentage values</span></div><div class='line' id='LC164'>					<span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">val</span><span class="p">.</span><span class="nx">slice</span> <span class="o">&amp;&amp;</span> <span class="nx">val</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;%&#39;</span> <span class="o">?</span> </div><div class='line' id='LC165'>						<span class="nb">parseFloat</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">/</span> <span class="mi">100</span> <span class="o">*</span> <span class="nx">max</span></div><div class='line' id='LC166'>						<span class="o">:</span> <span class="nx">val</span><span class="p">;</span></div><div class='line' id='LC167'>				<span class="p">}</span></div><div class='line' id='LC168'><br/></div><div class='line' id='LC169'>				<span class="c1">// Number or &#39;number&#39;</span></div><div class='line' id='LC170'>				<span class="k">if</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">limit</span> <span class="o">&amp;&amp;</span> <span class="sr">/^\d+$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">])</span> <span class="p">)</span></div><div class='line' id='LC171'>					<span class="c1">// Check the limits</span></div><div class='line' id='LC172'>					<span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">&lt;=</span> <span class="mi">0</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span> <span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">max</span> <span class="p">);</span></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'>				<span class="c1">// Queueing axes</span></div><div class='line' id='LC175'>				<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="nx">i</span> <span class="o">&amp;&amp;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">queue</span> <span class="p">){</span></div><div class='line' id='LC176'>					<span class="c1">// Don&#39;t waste time animating, if there&#39;s no need.</span></div><div class='line' id='LC177'>					<span class="k">if</span><span class="p">(</span> <span class="nx">old</span> <span class="o">!=</span> <span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="p">)</span></div><div class='line' id='LC178'>						<span class="c1">// Intermediate animation</span></div><div class='line' id='LC179'>						<span class="nx">animate</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">onAfterFirst</span> <span class="p">);</span></div><div class='line' id='LC180'>					<span class="c1">// Don&#39;t animate this axis again in the next iteration.</span></div><div class='line' id='LC181'>					<span class="k">delete</span> <span class="nx">attr</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC182'>				<span class="p">}</span></div><div class='line' id='LC183'>			<span class="p">});</span></div><div class='line' id='LC184'><br/></div><div class='line' id='LC185'>			<span class="nx">animate</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">onAfter</span> <span class="p">);</span>			</div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'>			<span class="kd">function</span> <span class="nx">animate</span><span class="p">(</span> <span class="nx">callback</span> <span class="p">){</span></div><div class='line' id='LC188'>				<span class="nx">$elem</span><span class="p">.</span><span class="nx">animate</span><span class="p">(</span> <span class="nx">attr</span><span class="p">,</span> <span class="nx">duration</span><span class="p">,</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">easing</span><span class="p">,</span> <span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC189'>					<span class="nx">callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">targ</span><span class="p">,</span> <span class="nx">settings</span><span class="p">);</span></div><div class='line' id='LC190'>				<span class="p">});</span></div><div class='line' id='LC191'>			<span class="p">};</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'>		<span class="p">}).</span><span class="nx">end</span><span class="p">();</span></div><div class='line' id='LC194'>	<span class="p">};</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>	<span class="c1">// Max scrolling position, works on quirks mode</span></div><div class='line' id='LC197'>	<span class="c1">// It only fails (not too badly) on IE, quirks mode.</span></div><div class='line' id='LC198'>	<span class="nx">$scrollTo</span><span class="p">.</span><span class="nx">max</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">axis</span> <span class="p">){</span></div><div class='line' id='LC199'>		<span class="kd">var</span> <span class="nx">Dim</span> <span class="o">=</span> <span class="nx">axis</span> <span class="o">==</span> <span class="s1">&#39;x&#39;</span> <span class="o">?</span> <span class="s1">&#39;Width&#39;</span> <span class="o">:</span> <span class="s1">&#39;Height&#39;</span><span class="p">,</span></div><div class='line' id='LC200'>			<span class="nx">scroll</span> <span class="o">=</span> <span class="s1">&#39;scroll&#39;</span><span class="o">+</span><span class="nx">Dim</span><span class="p">;</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>		<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="nx">$</span><span class="p">(</span><span class="nx">elem</span><span class="p">).</span><span class="nx">is</span><span class="p">(</span><span class="s1">&#39;html,body&#39;</span><span class="p">)</span> <span class="p">)</span></div><div class='line' id='LC203'>			<span class="k">return</span> <span class="nx">elem</span><span class="p">[</span><span class="nx">scroll</span><span class="p">]</span> <span class="o">-</span> <span class="nx">$</span><span class="p">(</span><span class="nx">elem</span><span class="p">)[</span><span class="nx">Dim</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()]();</span></div><div class='line' id='LC204'><br/></div><div class='line' id='LC205'>		<span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="s1">&#39;client&#39;</span> <span class="o">+</span> <span class="nx">Dim</span><span class="p">,</span></div><div class='line' id='LC206'>			<span class="nx">html</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span></div><div class='line' id='LC207'>			<span class="nx">body</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">ownerDocument</span><span class="p">.</span><span class="nx">body</span><span class="p">;</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>		<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span> <span class="nx">html</span><span class="p">[</span><span class="nx">scroll</span><span class="p">],</span> <span class="nx">body</span><span class="p">[</span><span class="nx">scroll</span><span class="p">]</span> <span class="p">)</span> </div><div class='line' id='LC210'>			 <span class="o">-</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span> <span class="nx">html</span><span class="p">[</span><span class="nx">size</span><span class="p">]</span>  <span class="p">,</span> <span class="nx">body</span><span class="p">[</span><span class="nx">size</span><span class="p">]</span>   <span class="p">);</span></div><div class='line' id='LC211'>	<span class="p">};</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'>	<span class="kd">function</span> <span class="nx">both</span><span class="p">(</span> <span class="nx">val</span> <span class="p">){</span></div><div class='line' id='LC214'>		<span class="k">return</span> <span class="k">typeof</span> <span class="nx">val</span> <span class="o">==</span> <span class="s1">&#39;object&#39;</span> <span class="o">?</span> <span class="nx">val</span> <span class="o">:</span> <span class="p">{</span> <span class="nx">top</span><span class="o">:</span><span class="nx">val</span><span class="p">,</span> <span class="nx">left</span><span class="o">:</span><span class="nx">val</span> <span class="p">};</span></div><div class='line' id='LC215'>	<span class="p">};</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'><span class="p">})(</span> <span class="nx">jQuery</span> <span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.09188s from fe18.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/flesler/jquery.scrollTo/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

