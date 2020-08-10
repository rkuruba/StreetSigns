# trafficsignrecognize
The project identifies the ban sign in the environment image using deep learning.<br>

<h2>Request:</h2>
<b>Python:</b><br>
<ul>
     <li>python 3.6.9</li>
</ul>
<br>
<b>Packages:</b><br>
<i>*Encourage using Anaconda 3 to create a new environment called "opencv" to install all packages as shown</i><br>
<br>
<img src="https://github.com/quangkhoiuit98/trafficsignrecognize/blob/master/static/image/indexguide0.png">
<ul>
      <li>numpy 1.17.2</li>
     <li>matplotlib 3.1.1</li>
     <li>opencv 3.4.2</li>  
     <li>django 2.2.5</li>
     <li>scikit-image 0.15.0</li>
     <li>tensorflow 2.0.0</li>
       <li>tensorflow-mkl 1.15.0</li>
     <li>keras 2.2.4</li>
     <li>pillow 6.2.1</li>
</ul>
<h2>Run project:</h2>
Activate Environment variable Anaconda 3
<pre>source ospath/anaconda3/anaconda3/bin/activate</pre>
Activate the environment contains the necessary packages
<pre>conda activate opencv</pre>
Move to the directory containing the project
<pre>cd parentProjectPath/traffic_sign_recognize-master </pre>
Chạy server
<pre>python manage.py runserver</pre><br>
After running the server successfully access the address <a href="http://localhost:8000/" target="_blank">localhost:8000</a> to manipulate.
<hr>
<b>Support for signs:</b> (According to Vietnamese standard signs)<br>
<ul>
     <li>101: Forbidden road</li>
     <li>102: Do not go in the opposite direction</li>
     <li>122: Stop</li>
     <li>127: Maximum speed allowed</li>
</ul>
Refer to source code train file model.h5 at <a href="https://github.com/quangkhoiuit98/trainmodeltrafficsignrecognize">github.com/quangkhoiuit98/trainmodeltrafficsignrecognize</a>
<br>
<br>
<h2>Main function</h2>
<b>Home page</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Identify signs from environmental photos<br><br>
<img src="https://github.com/quangkhoiuit98/trafficsignrecognize/blob/master/static/image/demo.gif"><br>
<b>Look up page for signs</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Look up signs from application data<br><br>

<img src="https://github.com/quangkhoiuit98/trafficsignrecognize/blob/master/static/image/demo1.gif"><br><br>
