<div class="az-header">
      <div class="container">
        <div class="az-header-left">
          <a href="{{url('/admin')}}" class="az-logo"><span></span>Info map</a>
          <a href="#" id="azMenuShow" class="az-header-menu-icon d-lg-none"><span></span></a>
        </div><!-- az-header-left -->
        <div class="az-header-menu">
          {{-- Navigation --}}
          <ul class="nav">
            {{-- <li class="nav-item">
              <a href="#" class="nav-link"><i class="typcn typcn-chart-area-outline"></i> Dashboard</a>
            </li> --}}
            <li class="nav-item">
              <a href="{{route('users')}}" class="nav-link"><i class="typcn typcn-document"></i>Users</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"><i class="typcn typcn-chart-bar-outline"></i>Add places</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"><i class="typcn typcn-chart-bar-outline"></i> others</a>
            </li>
            <li class="nav-item active">
              <a href="" class="nav-link with-sub"><i class="typcn typcn-book"></i> Components</a>
              <div class="az-menu-sub">
                <div class="container">
                  <div>
                    <nav class="nav">
                      <a href="#" class="nav-link">Element 1</a>
                      <a href="#" class="nav-link">Element 2</a>
                      <a href="#" class="nav-link">Element 3</a>
                      <a href="#" class="nav-link">Element 4</a>
                    </nav>
                  </div>
                </div><!-- container -->
              </div>
            </li>
          </ul>
        </div><!-- az-header-menu -->
        <div class="az-header-right">
         
          <div class="dropdown az-profile-menu az-header-notification">

            <a href="" class="az-img-user"><i class="typcn typcn-user"></i></a>

         
            <div class="dropdown-menu">
              <div class="az-dropdown-header d-sm-none">
                <a href="" class="az-header-arrow"><i class="icon ion-md-arrow-back"></i></a>
              </div>
             

              <a href="#edit-modal" data-toggle="modal" class="dropdown-item"><i class="typcn typcn-user-outline"></i> My Profile</a>


              <div class="modal fade show" id="edit-modal">
                <div class="modal-dialog modal-sm">
                  <div class="modal-content">
                    <div class="modal-body">
                      <h4>Hello world</h4>
                    </div>
                  </div>
                </div>
              </div>
              <a href="" class="dropdown-item"><i class="typcn typcn-edit"></i> Edit Profile</a>
              <a href="" class="dropdown-item"><i class="typcn typcn-time"></i> Activity Logs</a>
              <a href="" class="dropdown-item"><i class="typcn typcn-cog-outline"></i> Account Settings</a>
             
             <a href="{{ route('logout') }}" class="dropdown-item" 
              onclick="event.preventDefault();
                document.getElementById('logout-form').submit();"><i class="typcn typcn-power-outline"></i>&nbsp;&nbsp;Sign out</a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                      @csrf
                </form>
            </div><!-- dropdown-menu -->
          </div>
        </div><!-- az-header-right -->
      </div><!-- container -->
    </div><!-- az-header -->