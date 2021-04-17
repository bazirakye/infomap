<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="navbar-icon-container">
            <a href="#" class="navbar-icon pull-right visible-xs" id="nav-btn"><i class="fa fa-bars fa-lg white"></i></a>
            <a href="#" class="navbar-icon pull-right visible-xs" id="sidebar-toggle-btn"><i class="fa fa-search fa-lg white"></i></a>
          </div>
          <a class="navbar-brand" href="http://infomap.gsrslab.online">West Nile Web GIS Information Directory </a>
        </div>
        <div class="navbar-collapse collapse">
          <form class="navbar-form navbar-right" role="search">
            <div class="form-group has-feedback">
                <input id="searchbox" type="text" placeholder="Search" class="form-control">
                <span id="searchicon" class="fa fa-search form-control-feedback"></span>
            </div>
          </form>
          <ul class="nav navbar-nav">
            <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="about-btn"><i class="fa fa-question-circle white"></i>&nbsp;&nbsp;About</a></li>
            <li class="dropdown">
              <a id="toolsDrop" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-globe white"></i>&nbsp;&nbsp;Tools <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="full-extent-btn"><i class="fa fa-arrows-alt"></i>&nbsp;&nbsp;Zoom To Full Extent</a></li>
                <li class="divider hidden-xs"></li>
                <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="legend-btn"><i class="fa fa-picture-o"></i>&nbsp;&nbsp;Show Legend</a></li>
                
              </ul>
            </li>
        
            <li>
                  <a  href="#" role="button" data-toggle="collapse" data-target=".navbar-collapse.in" id="download-btn"><i class="fa fa-cloud-download"></i>&nbsp;&nbsp;Download </a>
            </li>
            
            @auth()
            <li class="dropdown">
                <a class="dropdown-toggle" id="userDrop" href="#" role="button" data-toggle="dropdown"><i class="fa fa-user white"></i>&nbsp;&nbsp;Hi {{ Auth::user()->username }} <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  {{-- @can('users', Auth::user()->role) --}}
                  <li>
                    <a  href="#" role="button" data-toggle="collapse" data-target=".navbar-collapse.in" id="user-account"><i class="fa fa-user"></i>&nbsp;&nbsp;My account </a>
                  </li> 
                  {{-- @endcan  --}}
                  <li class="divider hidden-xs"></li>
                  @can('admin', Auth::user()->role)
                  <li>
                    <a  href="{{route('admin')}}"><i class="fa fa-home"></i>&nbsp;&nbsp;Dashboard </a>

                  </li>
                  <li class="divider hidden-xs"></li>
                  @endcan
                  <li><a href="{{ route('logout') }}"
                      onclick="event.preventDefault();
                                 document.getElementById('logout-form').submit();"><i class="fa fa-power-off"></i>&nbsp;&nbsp;Logout</a>
                  </li>
                  <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                      @csrf
                  </form>
                </ul>
            </li>
            @else
            <li class="dropdown">
                <a class="dropdown-toggle" id="userDrop" href="#" role="button" data-toggle="dropdown"><i class="fa fa-user white"></i>&nbsp;&nbsp;User Account <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="login-btn"><i class="fa fa-user"></i>&nbsp;&nbsp;Login</a></li>
                  <li class="divider hidden-xs"></li>
                  <li><a href="#" data-toggle="collapse" data-target=".navbar-collapse.in" id="registration-btn"><i class="fa fa-user-plus"></i>&nbsp;&nbsp;Register</a></li>
                  
                </ul>
            </li>
            @endauth
          </ul>
        </div><!--/.navbar-collapse -->
      </div>
    </div>