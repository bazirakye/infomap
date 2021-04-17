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
    @Auth
    <div class="modal fade" id="userAccountModal" tabindex="-1" role="dialog">
      <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <div class="modal-title">My account</div>
          </div>
          <div class="modal-body">
            <form method="post" action="{{route('userupdate')}}">
              @csrf
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="username" class="form-control" required="required" value="{{Auth::user()->username}}">
              </div>
              <div class="form-group">
                <label for="username">Full names</label>
                <input type="text" name="fullnames" class="form-control" required="required" value="{{Auth::user()->fullnames}}">
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" class="form-control" required="required" value="{{ Auth::user()->email}}">
              </div>
              <div class="form-group">
                <button type="button" class="button btn-outline-success btn-sm" data-toggle="collapse" data-target="#Password" aria-controls="Password">Change Password</button>
              </div>
              <div class="collapse" id="Password">
                <div class="card-body">
                  <div class="form-group">
                    <label for="currentpassword">Current password</label>
                    <input type="password" name="currentpassword" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="newpassword">New password</label>
                    <input type="password" name="password" class="form-control">
                  </div>
                </div>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default " style="float: left;" data-dismiss="modal">Close</button>
            <div class="form-group">
                  <button type="submit" class="btn btn-primary">update</button>
              </div>  
            </form>  
          </div>

        </div>
      </div>
    </div>
    @endAuth

    <div class="modal fade" id="downloadModal" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Data Download</h4>
          </div>
          <div class="modal-body">

            
             @Auth

                <table>
                  <tr>
                    <td style="padding: 10px">
                      <a href="/data/universities.geojson" download="universities.geojson" target="_blank" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-cloud-download"></i>&nbsp;&nbsp;Universities </a>
                    </td>
                    <td style="padding: 10px">
                      <a href="/data/subways.geojson" download="subways.geojson" target="_blank" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-download"></i>&nbsp;&nbsp;Subway Lines</a>
                    </td>
                    <td style="padding: 10px">
                      <a href="/data/worship_centres.geojson" download="worship_centres.geojson" target="_blank" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-download"></i>&nbsp;&nbsp;worship centres</a>
                    </td>
                     <td style="padding: 10px">
                      <a href="/data/water_access.geojson" download="water_access.geojson" target="_blank" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-download"></i>&nbsp;&nbsp;water access centres</a>
                    </td>
                  </tr>
                   <tr>
                    <td style="padding: 10px">
                      <a href="/data/universities.geojson" download="universities.geojson" target="_blank" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-cloud-download"></i>&nbsp;&nbsp;Universities </a>
                    </td>
                    <td style="padding: 10px">
                      <a href="/data/subways.geojson" download="subways.geojson" target="_blank" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-download"></i>&nbsp;&nbsp;Subway Lines</a>
                    </td>
                    <td style="padding: 10px">
                      <a href="/data/worship_centres.geojson" download="worship_centres.geojson" target="_blank" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-download"></i>&nbsp;&nbsp;worship centres</a>
                    </td>
                     <td style="padding: 10px">
                      <a href="/data/water_access.geojson" download="water_access.geojson" target="_blank" data-toggle="collapse" data-target=".navbar-collapse.in"><i class="fa fa-download"></i>&nbsp;&nbsp;water access centres</a>
                    </td>
                  </tr>

                </table>
                {{-- @elseif(Auth::check()$$ Auth::user()->'email_verified_at'=='')
                <p>Its like your account is not yet veryfied, please veryfy your account to download.</p> --}}
            @else

            <p>All data obtained from this website are free and must be attributed to us and the main data provider</p>
            <p>You are required to first Login or Register (User Accounts Menu Item) inorder to download data</p>
            @endAuth
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Login</h4>
          </div>
          <div class="modal-body">
            <form id="login-form" action="{{ route('login') }}" method="POST">
              @csrf
              @if ($message = Session::get('error'))
              {{-- <script type="text/javascript">
                Window.alert("Check your username or password");
              </script> --}}
          <div class="alert alert-success alert-block">
          <button type="button" class="close" data-dismiss="alert">×</button> 
              <strong>{{ $message }}</strong>
          </div>
          @endif
              <fieldset>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="text" value="{{ old('email') }}" class="form-control @error('email') is-invalid @enderror" id="email" name="email" required="required">
                  @error('email')
                      <span class="invalid-feedback text-danger" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                  @enderror
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input type="password" class="form-control @error('password') is-invalid @enderror" id="password" name="password" required="required">
                  @error('password')
                      <span class="invalid-feedback text-danger" role="alert">
                          <strong>{{ $message }}</strong>
                      </span>
                  @enderror
                </div>
              </fieldset>
              <div class="form-group">
            </div>
            <div class="modal-footer">
              @if (Route::has('password.request'))
                    <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('password.request') }}">
                        {{ __('Forgot your password?') }}
                    </a>
                @endif
          {{--   <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button> --}}
            <button type="submit" class="btn btn-primary" >Login</button>
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
            <form id="signup-form" method="POST" action="{{ route('store') }}">
              @csrf

              <fieldset>
                <div class="form-group">
                  <label for="name">Username:</label>
                  <input type="text" class="form-control" id="uname" name="username" required="required">
                </div>
                <div class="form-group">
                  <label for="name">Full Names:</label>
                  <input type="text" class="form-control" id="names" name="fullnames" required="required">
                </div>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="text" class="form-control" id="email" name="email" required="required">
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input type="password" class="form-control" id="password" name="password" required="required">
                </div>
                <div class="form-group">
                  <label for="password">Confirm password:</label>
                  <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" required="required">
                </div>

                {{-- <script src="https://www.google.com/recaptcha/api.js"></script> --}}
                {{--  <script>
                  function onSubmit(token) {
                  document.getElementById("signup-form").submit();
                  }
                </script> --}}
              </fieldset>
            <div class="modal-footer">
            {{-- <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button> --}}
            <button type="submit" class="btn btn-primary">Register</button>
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

    @section('scripts')
    @if(count($errors)>0)
        toast('Hello world', success);
    @endif
    @endsection