<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test Vue JS</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/bootstrap/bootstrap.css">
    <script src="js/JQuery/JQuery.js"></script>
    <script src="js/bootstrap/bootstrap.js"></script>
    <script src="js/vue/vue.js"></script>
</head>
<body>
<section class="container">
    <div class="row">
        <div id="app" class="col-12">
            <h1>{{ showMessage | lowercase | capitalize }}</h1>
            <h1>{{ 'WORLD' | lowercase | capitalize }}</h1>
            <span v-on:click="changeText">TEXT</span>
            <p>{{title}}</p>
            <p v-bind:class="styleCSS">Цвет: {{styleCSS}}</p>
            <label>
                <input type="text" @input="styleCSS = $event.target.value; change($event.target.value);">
            </label>
            <p>{{firstValue}}</p>
            <p>{{secondValue}}</p>
            <button v-on:click="visible = !visible">Скрыть / Показать</button>
            <p v-if="visible">Текст, который может стать невидимым</p>
            <p v-else>Текст, который появится взамен</p>

            <ul>
                <li v-for="(element, i) in list">{{i+1}} - {{element.name}} {{element.message}}</li>
            </ul>
        </div>

        <div id="container-for-component-1" class="col-12">
            <test-component></test-component>
        </div>
        <div id="container-for-component-2" class="col-12">
            <hr>
            <test-local-component></test-local-component>
        </div>


    </div>

</section>
<script src="js/script.js"></script>
</body>
</html>