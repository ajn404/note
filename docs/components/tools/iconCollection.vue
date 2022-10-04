<template>
    <div class="collection-box">
        <div :class="['iconfont',item]" v-for="item in iconClass" @click="copy(item)" title="copy">
            <p>{{item}}</p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type {Ref} from 'vue';
const iconClass:Ref<any> = ref([]);
iconClass.value= [
    "icon-call",
    "icon-voice",
    "icon-user",
    "icon-customer_service",
    "icon-dislike",
    "icon-search",
    "icon-like",
    "icon-chat",
    "icon-heart",
    "icon-location",
    "icon-camera",
    "icon-image",
    "icon-card",
    "icon-message",
    "icon-calendar",
    "icon-compass",
    "icon-home",
    "icon-trips",
    "icon-wallet",
    "icon-cart",
    "icon-steeering_wheel",
    "icon-secure_payment",
    "icon-security",
    "icon-shield",
    "icon-companion",
    "icon-benefits",
    "icon-more_services",
    "icon-star",
    "icon-my_account",
    "icon-timer",
    "icon-driver",
    "icon-elder",
    "icon-share",
    "icon-packet",
    "icon-time",
    "icon-seat",
    "icon-clean",
    "icon-bus",
    "icon-edit",
    "icon-car",
    "icon-lock",
    "icon-discount",
    "icon-qr",
    "icon-scan",
    "icon-train",
    "icon-unlock",
    "icon-settings",
    "icon-shuttle",
    "icon-phone",
    "icon-travel_card",
    "icon-email",
    "icon-balance",
    "icon-trashcan",
    "icon-fast",
    "icon-receipt",
    "icon-hot",
    "icon-hints",
    "icon-game",
    "icon-work",
    "icon-audio",
    "icon-danger",
    "icon-premium",
    "icon-navigation",
    "icon-traffic_light",
    "icon-conversation",
    "icon-money_bag",
    "icon-reminder",
    "icon-audio_mute",
    "icon-locate",
    "icon-keyboard",
    "icon-report",
    "icon-badge",
    "icon-attachment",
    "icon-document",
    "icon-drinks",
    "icon-face_happy",
    "icon-flag",
    "icon-face_smile",
    "icon-face_frown",
    "icon-help",
    "icon-nav_drawer",
    "icon-building",
    "icon-ticket_bus",
    "icon-record",
    "icon-notification",
    "icon-cash_card",
    "icon-signal",
    "icon-ballons",
    "icon-manual",
    "icon-ticket",
    "icon-wifi",
    "icon-voucher_discount",
    "icon-voucher_merchant",
    "icon-wifi_unstable",
    "icon-path",
    "icon-voucher",
    "icon-arrow_up",
    "icon-add",
    "icon-back",
    "icon-collapse",
    "icon-close_window",
    "icon-arriving",
    "icon-close",
    "icon-complain",
    "icon-delete",
    "icon-female",
    "icon-arrow_down",
    "icon-departure",
    "icon-forward",
    "icon-error",
    "icon-info",
    "icon-rising",
    "icon-more",
    "icon-invisible",
    "icon-maps",
    "icon-swap",
    "icon-remove",
    "icon-selected",
    "icon-question"
]

const copy = (item)=>{
    const txt = `<div class="iconfont ${item}"></div>`
    navigator && navigator.clipboard && navigator.clipboard.writeText(txt)
    .then(()=>{
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance("复制成功");
        synth.speak(utterance)
    })
    .catch(err=>{console.log(err)})
    
}


</script>

<style lang="scss" scoped>
.collection-box {
    display: grid;
    grid-template-columns: repeat(5, 20%);

    .iconfont {
        line-height: 3;
        font-size: 1.5em;
        color: var(--c-text);
        text-align: center;
        cursor: context-menu;

        p {
            font-size: .8em;
            line-height: 1;
            margin: 0;
        }


        &:hover {
            color: var(--c-brand);
        }
    }
}
</style>