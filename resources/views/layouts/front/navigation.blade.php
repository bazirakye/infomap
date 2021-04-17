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
                <a  href="#" role="button" data-toggle="collapse" data-target=".navbar-collapse.in" id="download-btn"><i class="fa fa-cloud-download white"></i>&nbsp;&nbsp;Download <b class="caret"></b></a>
            </li>
            @auth()
            <li class="dropdown">
                <a class="dropdown-toggle" id="userDrop" href="#" role="button" data-toggle="dropdown"><i class="fa fa-user white"></i>&nbsp;&nbsp;Hi {{ Auth::user()->name }} <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><a href="#"><i class="fa fa-user"></i>&nbsp;&nbsp;Something here</a></li>
                  <li class="divider hidden-xs"></li>
                  <li><a href="#" ><i class="fa fa-user-plus"></i>&nbsp;&nbsp;Something here</a></li>
                  
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
<div class="modal fade" id="aboutModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Welcome to West Nile Web GIS Mapping Project!</h4>
          </div>
          <div class="modal-body">
            <ul class="nav nav-tabs nav-justified" id="aboutTabs">
              <li class="active"><a href="#about" data-toggle="tab"><i class="fa fa-question-circle"></i>&nbsp;About the project</a></li>
              <li><a href="#contact" data-toggle="tab"><i class="fa fa-envelope"></i>&nbsp;Contact us</a></li>
              <li><a href="#disclaimer" data-toggle="tab"><i class="fa fa-exclamation-circle"></i>&nbsp;Disclaimer</a></li>
        <li><a href="#metadata" data-toggle="tab"><i class="fa fa-globe"></i>&nbsp;Metadata</a></li>
            </ul>
            <div class="tab-content" id="aboutTabsContent">
              <div class="tab-pane fade active in" id="about">
                <p>The West Nile Web GIS Information Directory (infomap) is a webmapping application piloted in Arua Municipality, West Nile Region of Uganda. </p>
        <p>The project aims to geolocate important features (public and private) in West Nile Region and throughout Uganda, and display them to the public using an easy to use and a responsive webmap. 
          We are currently leveraging the power of Geographical Information Systems (GIS) to provide geolocation on digital maps. </p> 
          <p>This phase of the project has been supported by <a href="http://muni.ac.ug/"> Muni University</a></p>

                <div class="panel panel-primary">
                  <div class="panel-heading">Features</div>
                  <ul class="list-group">
                    <li class="list-group-item">The webmap is responsiveness and runs on any device screen (Mobile, Tablet, Desktop, etc)</li>
                    <li class="list-group-item">Fast and Easy to use application</li>
                    <li class="list-group-item">Download / access the data in an easy to use GeoJSON format</li>
                    <li class="list-group-item">Provision of Tourist Infomation and direction information for the public</li>
        <li class="list-group-item">The application is developed using Open-source libraries such as: <a href="http://getbootstrap.com/">Bootstrap 3</a>, <a href="http://leafletjs.com/" target="_blank">Leaflet</a>, <a href="http://twitter.github.io/typeahead.js/" target="_blank">TypeHead JavaScript</a>, and <a href="http://getbootstrap.com/">OpenStreetMap</a>. 
          All provided under Open source, MIT license</li>
                  </ul>
                </div>
              </div>
        
              <div id="disclaimer" class="tab-pane fade text-danger">
                <p>All datasets provided on this website are either created by us (GSRSlab) or obtained from other data provider.</p>
       <p>Data access and use is strictly allowed for non-commercial purposes. Any commercial or other usage require express permission from GSRSlab</p>
                <p>We do not imply or guarantee any accuracies beyond the data as it is. Any such variations or corrections shall are done at our discretion and users are advised to consult our team in such cases.</p>
              </div>
              
              <div class="tab-pane fade" id="contact">
                <form id="contact-form" action="https://infomap.gsrslab.online/pages/sendemail.php" method="POST">
                  <div class="well well-sm">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="form-name">First Name:</label>
                          <input type="text" class="form-control" id="form-name" name="firstname">
                        </div>
                        <div class="form-group">
                          <label for="form-lastname">Last Name:</label>
                          <input type="text" class="form-control" id="form_surname" name="lastname">
                        </div>
                        <div class="form-group">
                          <label for="email">Email:</label>
                          <input type="text" class="form-control" id="email" name="email">
                        </div>
                      </div>
                      <div class="col-md-8">
                        <label for="message">Message:</label>
                        <textarea class="form-control" rows="8" id="message" name="message"></textarea>
                      </div>
                      <div class="col-md-12">
                        <p>
                          <button type="submit" class="btn btn-primary pull-right">Submit</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
       
       
              </div>
                <div id="metadata" class="tab-pane fade text-danger">
                  <p>Most Features of Interests (FOIs) are created by GSRSlab survey team and metadata attributed to 
           <a href="https://www.gsrslab.online/" target="_blank">GSRSlab.</a></p>
         <p>Other Features of Interests (FOIs) are obtained and specifically indicated as courtesy of 
           <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a></p>
         <p>Basemaps are obtained from <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and 
           <a href="https://cartodb.com/attributions" target="_blank"> CartoDB</a></p>
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" id="legendModal" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Map Legend</h4>
          </div>
          <div class="modal-body">
            <p>Map Legend under development...</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    
    <div class="modal fade" id="downloadModal" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Data Download Requirements</h4>
          </div>
          <div class="modal-body">
            <p>All data obtained from this website are free and must be attributed to us and the main data provider</p>
            <p>You are required to first Login or Register (User Accounts Menu Item) inorder to download data</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    
      
      
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Login</h4>
          </div>
          <div class="modal-body">
            
                    <form method="POST" action="{{ route('login') }}">
            @csrf

            <!-- Email Address -->
            <div class="form-group">
                <x-label for="email" :value="__('Email')" />

                <x-input id="email" class="form-control" type="email" name="email" :value="old('email')" required autofocus />
            </div>

            <!-- Password -->
            <div class="form-group">
                <x-label for="password" :value="__('Password')" />

                <x-input id="password" class="form-control"
                                type="password"
                                name="password"
                                required autocomplete="current-password" />
            </div>

            <!-- Remember Me -->
            <div class="block mt-4">
                <label for="remember_me" class="inline-flex items-center">
                    <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember">
                    <span class="ml-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
         
                    <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('password.request') }}">
                        {{ __('Forgot your password?') }}
                    </a>
                

                <x-button class="btn btn-primary">
                    {{ __('Log in') }}
                </x-button>
            </div>
        </form>
        
          </div>
          
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    
    <div class="modal fade" id="registrationModal" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Signup</h4>
          </div>
          <div class="modal-body">
            <form id="signup-form" action="https://infomap.gsrslab.online/pages/signup.php" method="POST">
              <fieldset>
                <div class="form-group">
                  <label for="name">Username:</label>
                  <input type="text" class="form-control" id="uname" name="uname">
                </div>
                <div class="form-group">
                  <label for="name">Full Names:</label>
                  <input type="text" class="form-control" id="names" name="names">
                </div>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="text" class="form-control" id="email" name="email">
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input type="password" class="form-control" id="password" name="password">
                </div>
              </fieldset>
              <!--<div class="form-group">
                                    <input type="checkbox" id="ch" name="chs">
                                    I agree with <a href="#">terms and conditions.</a>
            </div>-->
            <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary" >Register</button>
          </div>
            </form>
          </div>
          
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    


    <div class="modal fade" id="featureModal" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title text-primary" id="feature-title"></h4>
          </div>
          <div class="modal-body" id="feature-info"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" id="attributionModal" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">
              <p>Project Lead: <a href='mailto:d.abudu@muni.ac.ug' target="_blank"> Dan ABUDU (PhD Cand.)</a> </p>
        <p>Developer: <a href='mailto:d.abudu@muni.ac.ug' target="_blank"> Dan ABUDU (PhD Cand.)</a></p>
        <p>Developer: <a href='mailto:d.abudu@muni.ac.ug' target="_blank"> Dan ABUDU (PhD Cand.)</a></p>

            </h4>
          </div>
          <div class="modal-body">
            <div id="attribution"></div>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

