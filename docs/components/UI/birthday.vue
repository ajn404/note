<template>
    <div class="card">
        <div class="imgBox">
            <div class="bark"></div>
            <img src="/images/lou.jpg">
        </div>
        <div class="details">
            <h4 class="color1">You're not a Fossil! (YET)</h4>
            <h4 class="color2 margin">(HAPPY BIRTHDAY)</h4>
            <p>Dear Mam,</p>
            <p>Let's see.. .</p>
            <p>You’re never around, you</p>
            <p>hate the music I’m into, you</p>
            <p>practically despise the movies I</p>
            <p>like, and yet somehow you still</p>
            <p>manage to be the best 妈妈 every year.</p>
            <p>你最近怎么样? :)</p>
            <p class="text-right">Happy Birthday, mami!</p>
            <p class="text-right">♥ajn404</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
::selection {
    background: transparent;
}

h4 {
    font-size: 26px;
    line-height: 1px;
    font-family: 'Amatic SC', cursive !important;
}

.color1 {
    color: #1BBC9B
}

/*MOUNTAIN MEADOW*/
.color2 {
    color: #C0392B
        /*TALL POPPY*/
}


.card {
    color: #013243;
    /*SHERPA BLUE*/
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50vw;
    height: 50vh;
    background: #e0e1dc;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%) perspective(2000px);
    box-shadow: inset 300px 0 50px rgba(0, 0, 0, .5), 20px 0 60px rgba(0, 0, 0, .5);
    transition: 1s;
}

.card:hover {
    transform: translate(-50%, -50%) perspective(2000px) rotate(15deg) scale(1.2);
    box-shadow: inset 20px 0 50px rgba(0, 0, 0, .5), 0 10px 100px rgba(0, 0, 0, .5);
}

.card:before {
    content: '';
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 5px;
    background: #BAC1BA;
    transform-origin: bottom;
    transform: skewX(-45deg);
}

.card:after {
    content: '';
    position: absolute;
    top: 0;
    right: -5px;
    width: 5px;
    height: 100%;
    background: #92A29C;
    transform-origin: left;
    transform: skewY(-45deg);
}

.card .imgBox {
    width: 100%;
    height: 100%;
    position: relative;
    transform-origin: left;
    transition: .7s;
}

.card .bark {
    position: absolute;
    background: #e0e1dc;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: .7s;
}

.card .imgBox img {
    min-width: 100%;
    max-height: 400px;
}

.card:hover .imgBox {
    transform: rotateY(-135deg);
}

.card:hover .bark {
    opacity: 1;
    transition: .6s;
    box-shadow: 300px 200px 100px rgba(0, 0, 0, .4) inset;
}

.card .details {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 0 0 0 10px;
    z-index: -1;
    margin-top: 70px;
}

.card .details p {
    font-size: 15px;
    line-height: 5px;
    transform: rotate(-10deg);
    padding: 0 0 0 20px;
}

.card .details h4 {
    text-align: center;
}

.text-right {
    text-align: right;
}
</style>