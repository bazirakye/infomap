@extends ('layouts.admin')
@section('content')
{{-- 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> --}}
<div class="content-wrapper">
		 @if ($message = Session::get('success'))
          <div class="alert alert-success alert-block">
          <button type="button" class="close" data-dismiss="alert">×</button> 
              <strong>{{ $message }}</strong>
          </div>
          @endif

          @if ($message = Session::get('error'))
          <div class="alert alert-danger alert-block">
          <button type="button" class="close" data-dismiss="alert">×</button> 
              <strong>{{ $message }}</strong>
          </div>
          @endif

          @if ($message = Session::get('warning'))
          <div class="alert alert-warning alert-block">
          <button type="button" class="close" data-dismiss="alert">×</button> 
          <strong>{{ $message }}</strong>
          </div>
          @endif

          @if ($message = Session::get('info'))
          <div class="alert alert-info alert-block">
          <button type="button" class="close" data-dismiss="alert">×</button> 
          <strong>{{ $message }}</strong>
          </div>
          @endif

          @if ($errors->any())  
          <div class="alert alert-danger">
          <button type="button" class="close" data-dismiss="alert">×</button> 
          Please check the form below for errors
          </div>
          @endif
	<section class="content">
      	<div class="card">
      		<div class="card-header">
              	<h3 class="card-title">Users available</h3>


            <div>
            <div class="card-body">
            	{{-- <input type="text" id="myInput" onkeyup="myFunction()" placeholder="search"> --}}
				{{-- <div class="table-responsive"> --}}
					<button class="btn btn-info ">Export HTML table to CSV file</button>
					<input  class="form-group float-right" type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names..">
					<script>
					function myFunction() {
					  // Declare variables
					  var input, filter, table, tr, td, i, txtValue;
					  input = document.getElementById("myInput");
					  filter = input.value.toUpperCase();
					  table = document.getElementById("myTable");
					  tr = table.getElementsByTagName("tr");
					
					  // Loop through all table rows, and hide those who don't match the search query
					  for (i = 0; i < tr.length; i++) {
					    td = tr[i].getElementsByTagName("td")[0];
					    if (td) {
					      txtValue = td.textContent || td.innerText;
					      if (txtValue.toUpperCase().indexOf(filter) > -1) {
					        tr[i].style.display = "";
					      } else {
					        tr[i].style.display = "none";
					      }
					    }
					  }
					}
					</script>
					<script type="text/javascript">
						function download_csv(csv, filename) {
    				var csvFile;
    				var downloadLink;

    				// CSV FILE
    				csvFile = new Blob([csv], {type: "text/csv"});

    				// Download link
    				downloadLink = document.createElement("a");

    				// File name
    				downloadLink.download = filename;

    				// We have to create a link to the file
    				downloadLink.href = window.URL.createObjectURL(csvFile);

    				// Make sure that the link is not displayed
    				downloadLink.style.display = "none";

    				// Add the link to your DOM
    				document.body.appendChild(downloadLink);

    				// Lanzamos
    				downloadLink.click();
				}

				function export_table_to_csv(html, filename) {
					var csv = [];
					var rows = document.querySelectorAll("table tr");
	
    				for (var i = 0; i < rows.length; i++) {
					var row = [], cols = rows[i].querySelectorAll("td, th");
		
        			for (var j = 0; j < cols.length; j++) 
            		row.push(cols[j].innerText);
        
					csv.push(row.join(","));		
				}

    			// Download CSV
    			download_csv(csv.join("\n"), filename);
			}

			document.querySelector("button").addEventListener("click", function () {
    		var html = document.querySelector("table").outerHTML;
			export_table_to_csv(html, "table.csv");
		});

					</script>
				    <table class="table table-bordered table-striped table-hover" id="myTable">
				      <thead>
				        <tr>
				          <th>S/N</th>
				          <th>Full names</th>
				          <th>Username</th>
				          <th>email</th>
				          <th>Registration date</th>
				          <th colspan="3">Action</th>
				        </tr>
				      </thead>
				      <tbody>
				      	@foreach($users as $user)
				        <tr user_id_{{ $user->id }}>
				          <th>{{++$i}}</th>
				          <td>{{$user->fullnames}}</td>
				          <td>{{ $user->username }}</td>
				          <td>{{ $user->email }}</td>
				          <td>{{ $user->created_at}}</td>
				          
				          <td><a href="#" data-target="#myModal{{ $user->id }}" data-toggle="modal"><i class="fa fa-edit btn btn-info "></i></a>

  							<!-- Modal -->
  							<div class="modal fade" id="myModal{{ $user->id }}" role="dialog">
  							  <div class="modal-dialog">
  							  
  							    <!-- Modal content-->
  							    <div class="modal-content">
	  							      <div class="modal-header">
	  							        
	  							        <h4 class="modal-title">Edit users</h4>
	  							        <button type="button" class="close" data-dismiss="modal">&times;</button>
	  							      </div>


  							      <div class="modal-body">
  							        <form  method="post" action="{{route('update',['id' => $user->id])}}" enctype="multipart/form-data">
  							        @csrf

  							        	
  							        	<input type="hidden" name="id" value="{{$user->id}}">
  							        	<div class="form-group">
                        
                          		       		<label for="fullnames">full names</label>
		                                    <input type="text" name="fullnames" class="form-control" required="required" value="{{$user->fullnames}}">
		                                </div>


  							        	<div class="form-group">
                        
                          		       		<label for="name">username</label>
		                                    <input type="text" name="username" class="form-control" required="required" value="{{$user->username}}">
		                                </div>
		                                <div class="form-group">
                          		       		<label for="email">email</label>
		                                    <input type="text" name="email" class="form-control" required="required" value="{{$user->email}}">
		                                </div>

		                                <div class="form-group">
                        
                          		       		<label for="password">password</label>
		                                    <input type="text" name="password" class="form-control"  placeholder="change password">
		                                </div>

		                                <div class="modal-footer">
	  							        <button type="submit" class="btn btn-info">Submit</button>
	  
	  							      	</div>
                                    </form>

  							      </div>
	  							    
	  							</div>
  							    
  							  </div>
  							</div>
                  				
				          </td>
				          <td><a href="{{route('delete', ['id' => $user->id])}}"  class = "btn btn-danger"> <i class="fa fa-trash"></i></a> 
                  			</td>
				          
				        </tr>


				        @endforeach
				        
				      </tbody>
				      
				    </table>
	  			</div>
	  		</div><!--card body-->
	  	</div>

	  	
	  </section>
@endsection

<script >
	 $("#myTable td:nth-child(1)").click(function (event) {
        event.preventDefault();

        var $td = $(this).closest('tr').children('td');
        var currentCellText = $td.eq(0).text();
        var CellText = $td.eq(1).text();

        makeAJAXRequest(currentCellText);  // whatever your code is.
    });
</script>