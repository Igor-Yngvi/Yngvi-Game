<body>
	<link rel="stylesheet" href="css/style.css" type="text/css">

	<title>Genius</title>
	
	<link rel = "icon" href ="img/fav-icon.png" type = "image/x-icon"> 
	<header>
		<div class="switch__container">
			<input id="switch-flat" class="switch switch--flat" type="checkbox" onclick="tema()">
			<label for="switch-flat"></label>
		</div>
	</header>
	<div class="conteudo">
		<table class="game">
			<tr>
				<td id="a1" onclick="c('a1')"></td>
				<td id="a2" onclick="c('a2')"></td>
				<td id="a3" onclick="c('a3')"></td>
			</tr>
			<tr>
				<td id="b1" onclick="c('b1')"></td>
				<td id="b2" onclick="c('b2')"></td>
				<td id="b3" onclick="c('b3')"></td>
			</tr>
			<tr>
				<td id="c1" onclick="c('c1')"></td>
				<td id="c2" onclick="c('c2')"></td>
				<td id="c3" onclick="c('c3')"></td>
			</tr>
		</table>
		<button id="bt" onclick="slc(1)">Começe</button>
	</div>
<script src="js/script.js"></script>
</body>
