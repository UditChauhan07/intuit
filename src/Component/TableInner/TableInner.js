import React from 'react';

function TableInner() {




    return (
        <div>
            <div class="InnerSpace">
                <div class="row mt-3 mb-3">
                    <div className='d-flex justify-content-between'>
                        <h1 class=" mb-4">Sales Report</h1>
                        <button type="button" aria-haspopup="true" aria-expanded="false" class="btn-shadow  btn btn-info mt-2 height38">
                            <span class="btn-icon-wrapper pr-2 opacity-7">
                                <i class="fa fa-download fa-w-20"></i>
                            </span>
                            Download
                        </button>

                    </div>
                    
                    

                    <div className='col'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>By month</option>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>

                    </div>
                    <div className='col'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>By year</option>
                            <option value="1">2023</option>
                            <option value="2">2022</option>
                            <option value="3">2021</option>
                            <option value="4">2020</option>
                            <option value="5">2019</option>
                            <option value="6">2018</option>
                            <option value="7">2017</option>
                            <option value="8">2016</option>
                            <option value="9">2015</option>
                        </select>


                    </div>
                    <div className='col'>
                        <div class="form-group">

                            <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="By Order No." />
                        </div>

                    </div>
                    <div className='col'>
                        <div class="form-group">

                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="By Product Name" />
                        </div>

                    </div>
                    <div className='col'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>High to low price</option>
                            <option value="1">30-25</option>
                            <option value="2">25-20</option>
                            <option value="3">20-15</option>
                            <option value="4">15-10</option>
                            <option value="5">10-05</option>
                            <option value="6">05-0</option>

                        </select>


                    </div>
                    <div className='col'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Low to high price</option>
                            <option value="1">0-5</option>
                            <option value="2">05-10</option>
                            <option value="3">10-15</option>
                            <option value="4">15-20</option>
                            <option value="5">20-25</option>
                            <option value="6">25-30</option>

                        </select>


                    </div>
                    <div className='col'>
                        <div class="form-group">

                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="By customer Name" />
                        </div>

                    </div>
                    <div className='col d-flex justify-content-between '>
                        <button type="button" aria-haspopup="true" aria-expanded="false" class="btn-shadow  btn btn-dark height38">

                            Submit
                        </button>
                        <button type="button" aria-haspopup="true" aria-expanded="false" class="btn-shadow  btn btn-dark height38">

                            Clear
                        </button>



                    </div>

                </div>
                <div className='row'>
                    <div class="col-md-12">
                        <div class="main-card mb-3 card">
                            <div class="card-header">Table

                            </div>
                            <div class="table-responsive">
                                <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">Order No.</th>
                                            <th >Customer Name</th>
                                            <th class="text-center">Customer Contact (Email/Phone number)</th>
                                            <th class="text-center">Product Name</th>
                                            <th class="text-center">Product Price</th>
                                            <th class="text-center">Product Sale Price</th>
                                            <th class="text-center">Qty</th>
                                            <th class="text-center">Subtotal Price</th>
                                            <th class="text-center">Discount Price (Percentage or Amount)</th>
                                            <th class="text-center">Tax</th>
                                            <th class="text-center">Total Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center text-muted">#345</td>
                                            <td>
                                                <div class="widget-content p-0">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left mr-3">
                                                            <div class="widget-content-left">
                                                                <img width="40" class="rounded-circle" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="widget-content-left flex2">
                                                            <div class="widget-heading">John Doe</div>
                                                            <div class="widget-subheading opacity-7">Web Developer</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">Madrid</td>
                                            <td class="text-center">Madrid</td>
                                            <td class="text-center">Madrid</td>
                                            <td class="text-center">Madrid</td>
                                            <td class="text-center">Madrid</td>
                                            <td class="text-center">Madrid</td>
                                            <td class="text-center">Madrid</td>
                                            <td class="text-center">
                                                <div class="badge badge-warning">Pending</div>
                                            </td>
                                            <td class="text-center">
                                                <button type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Details</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center text-muted">#347</td>
                                            <td>
                                                <div class="widget-content p-0">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left mr-3">
                                                            <div class="widget-content-left">
                                                                <img width="40" class="rounded-circle" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="widget-content-left flex2">
                                                            <div class="widget-heading">Ruben Tillman</div>
                                                            <div class="widget-subheading opacity-7">Etiam sit amet orci eget</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">Berlin</td>
                                            <td class="text-center">Berlin</td>
                                            <td class="text-center">Berlin</td>
                                            <td class="text-center">Berlin</td>
                                            <td class="text-center">Berlin</td>
                                            <td class="text-center">Berlin</td>
                                            <td class="text-center">Berlin</td>
                                            <td class="text-center">
                                                <div class="badge badge-success">Completed</div>
                                            </td>
                                            <td class="text-center">
                                                <button type="button" id="PopoverCustomT-2" class="btn btn-primary btn-sm">Details</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center text-muted">#321</td>
                                            <td>
                                                <div class="widget-content p-0">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left mr-3">
                                                            <div class="widget-content-left">
                                                                <img width="40" class="rounded-circle" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="widget-content-left flex2">
                                                            <div class="widget-heading">Elliot Huber</div>
                                                            <div class="widget-subheading opacity-7">Lorem ipsum dolor sic</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">London</td>
                                            <td class="text-center">London</td>
                                            <td class="text-center">London</td>
                                            <td class="text-center">London</td>
                                            <td class="text-center">London</td>
                                            <td class="text-center">London</td>
                                            <td class="text-center">London</td>
                                            <td class="text-center">
                                                <div class="badge badge-danger">In Progress</div>
                                            </td>
                                            <td class="text-center">
                                                <button type="button" id="PopoverCustomT-3" class="btn btn-primary btn-sm">Details</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center text-muted">#55</td>
                                            <td>
                                                <div class="widget-content p-0">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left mr-3">
                                                            <div class="widget-content-left">
                                                                <img width="40" class="rounded-circle" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" /></div>
                                                        </div>
                                                        <div class="widget-content-left flex2">
                                                            <div class="widget-heading">Vinnie Wagstaff</div>
                                                            <div class="widget-subheading opacity-7">UI Designer</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="text-center">Amsterdam</td>
                                            <td class="text-center">Amsterdam</td>
                                            <td class="text-center">Amsterdam</td>
                                            <td class="text-center">Amsterdam</td>
                                            <td class="text-center">Amsterdam</td>
                                            <td class="text-center">Amsterdam</td>
                                            <td class="text-center">Amsterdam</td>

                                            <td class="text-center">
                                                <div class="badge badge-info">On Hold</div>
                                            </td>
                                            <td class="text-center">
                                                <button type="button" id="PopoverCustomT-4" class="btn btn-primary btn-sm">Details</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="d-block text-center card-footer">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-end">
                                        <li class="page-item disabled">
                                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableInner;