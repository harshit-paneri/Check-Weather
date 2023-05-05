import logo from './logo.svg';
import './App.css';
import './script.js';

function App() {
  return (
    <div className="App">
      <div>

<nav class="navbar bg-light">
    <div class="container-fluid">
        <a class="navbar-brand">Weather App</a>
    </div>
</nav>
<div class="container">
    <h1 class="my-4 text-center">Weather for <span id="cityName"></span></h1>
    <div class="m-2 p-2">

        <form class="d-flex m-5 p-2" role="search">
            <input id="city" class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit" id="submit">Search</button>
        </form>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3 text-bg-primary border-primary">
                        <h4 class="my-0 fw-normal ">Temperature</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Tempearature is <span id="temp"></span> ℃</li>
                            <li>Min Tempearature is <span id="min_temp"></span> ℃</li>
                            <li>Max Tempearature is <span id="max_temp"></span> ℃</li>
                        </ul>
                        <button type="button" class="w-100 btn btn-lg btn-primary">Temp</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3 text-bg-primary border-primary">
                        <h4 class="my-0 fw-normal">Weather Info</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Cloud PCT is <span id="cloud_pct"></span></li>
                            <li>Wind Speed is <span id="wind_speed"></span> Km/h</li>
                            <li>Wind Degrees is <span id="wind_degrees"></span></li>
                            <li>Humidity is <span id="humidity"></span></li>

                        </ul>
                        <button type="button" class="w-100 btn btn-lg btn-primary">Weather Info</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                    <div class="card-header py-3 text-bg-primary border-primary">
                        <h4 class="my-0 fw-normal">Sun Feel</h4>
                    </div>
                    <div class="card-body">
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Sunset is <span id="sunset"></span></li>
                            <li>Feels Like is <span id="feels_like"></span></li>
                            <li>Sunrise is <span id="sunrise"></span></li>
                        </ul>
                        <button type="button" class="w-100 btn btn-lg btn-primary">Sun</button>
                    </div>
                </div>
            </div>
        </div>


    </div>

</div>

{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"></script>
<script src="script.js"></script> */}
</div>
</div>
);
}

export default App;
