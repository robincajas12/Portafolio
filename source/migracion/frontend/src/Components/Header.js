import '../Style/Header.css';
function Header({playSong})
{
    return(
        <header id="header" className="flex-row flex-centery">
        <button className='button-song' onClick={()=>{playSong()}}>
        </button>
        {/* <div className="content__logo">
            <svg width="125" height="50" viewBox="0 0 125 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="logo">
                <g id="logo-content">
                <rect width="125" height="50"/>
                <path id="logo-item" d="M14.6543 28.8516V27.7031L11.0684 26.3203L10.7578 26.2148L11.0684 26.1152L14.6543 24.709V23.5605L9.68555 25.7754V26.6309L14.6543 28.8516ZM18.3457 30.7324L21.9023 21.4688H20.9355L17.373 30.7324H18.3457ZM24.1465 28.8457L29.3203 26.625V25.7695L24.1465 23.5547V24.6738L27.9375 26.0801L28.2891 26.1914L27.9375 26.291L24.1465 27.7207V28.8457Z"/>
                <path id="text-item1" d="M44.7402 47H45.8535L46.8965 40.9355L46.9609 40.5723L47.0195 40.9297L48.0566 47H49.1641L50.2012 38.4688H49.1758L48.5605 44.3398L48.5254 44.6914L48.4609 44.3457L47.4238 38.4688H46.4805L45.4492 44.3398L45.3848 44.6914L45.3496 44.3516L44.7344 38.4688H43.7031L44.7402 47ZM54.3027 47.1172C54.9199 47.1172 55.4375 46.9941 55.8555 46.748C56.2773 46.498 56.5938 46.2129 56.8047 45.8926L56.1426 45.377C55.9434 45.6348 55.6934 45.8418 55.3926 45.998C55.0918 46.1543 54.748 46.2324 54.3613 46.2324C54.0684 46.2324 53.8008 46.1777 53.5586 46.0684C53.3164 45.959 53.1094 45.8086 52.9375 45.6172C52.7695 45.4375 52.6367 45.2305 52.5391 44.9961C52.4453 44.7617 52.3848 44.4902 52.3574 44.1816V44.1406H56.8867V43.6543C56.8867 43.2129 56.8301 42.8027 56.7168 42.4238C56.6074 42.0449 56.4395 41.7148 56.2129 41.4336C55.9863 41.1562 55.7012 40.9395 55.3574 40.7832C55.0176 40.623 54.6191 40.543 54.1621 40.543C53.7988 40.543 53.4434 40.6172 53.0957 40.7656C52.752 40.9141 52.4453 41.127 52.1758 41.4043C51.9023 41.6855 51.6836 42.0293 51.5195 42.4355C51.3555 42.8379 51.2734 43.2949 51.2734 43.8066V44.0527C51.2734 44.4941 51.3477 44.9023 51.4961 45.2773C51.6445 45.6523 51.8516 45.9766 52.1172 46.25C52.3828 46.5234 52.7012 46.7363 53.0723 46.8887C53.4473 47.041 53.8574 47.1172 54.3027 47.1172ZM54.1621 41.4336C54.4395 41.4336 54.6777 41.4844 54.877 41.5859C55.0801 41.6875 55.248 41.8203 55.3809 41.9844C55.5137 42.1484 55.6172 42.3438 55.6914 42.5703C55.7656 42.793 55.8027 43.002 55.8027 43.1973V43.25H52.3926C52.4355 42.957 52.5098 42.6992 52.6152 42.4766C52.7246 42.25 52.8574 42.0586 53.0137 41.9023C53.1699 41.75 53.3457 41.6348 53.541 41.5566C53.7363 41.4746 53.9434 41.4336 54.1621 41.4336ZM64.082 43.9004V43.7773C64.082 43.4453 64.0547 43.1309 64 42.834C63.9453 42.5332 63.8652 42.2598 63.7598 42.0137C63.6582 41.7949 63.541 41.5977 63.4082 41.4219C63.2754 41.2422 63.125 41.0898 62.957 40.9648C62.7695 40.832 62.5605 40.7285 62.3301 40.6543C62.0996 40.5801 61.8477 40.543 61.5742 40.543C61.3555 40.543 61.1523 40.5645 60.9648 40.6074C60.7773 40.6504 60.6055 40.7129 60.4492 40.7949C60.3242 40.8613 60.207 40.9414 60.0977 41.0352C59.9883 41.125 59.8887 41.2266 59.7988 41.3398V38H58.7148V47H59.7109L59.7637 46.2793C59.834 46.3691 59.9082 46.4512 59.9863 46.5254C60.0645 46.5996 60.1465 46.668 60.2324 46.7305C60.4121 46.8555 60.6133 46.9512 60.8359 47.0176C61.0625 47.084 61.3125 47.1172 61.5859 47.1172C61.8242 47.1172 62.0449 47.0879 62.248 47.0293C62.4551 46.9707 62.6445 46.8887 62.8164 46.7832C63.0547 46.6309 63.2578 46.4395 63.4258 46.209C63.5977 45.9746 63.7363 45.7109 63.8418 45.418C63.9199 45.1953 63.9785 44.957 64.0176 44.7031C64.0605 44.4453 64.082 44.1777 64.082 43.9004ZM62.998 43.7773V43.9004C62.998 44.0879 62.9863 44.2715 62.9629 44.4512C62.9395 44.6309 62.9023 44.7988 62.8516 44.9551C62.7891 45.1621 62.7051 45.3496 62.5996 45.5176C62.4941 45.6855 62.3633 45.8242 62.207 45.9336C62.0898 46.0195 61.957 46.0859 61.8086 46.1328C61.6602 46.1758 61.4961 46.1973 61.3164 46.1973C61.1289 46.1973 60.957 46.1738 60.8008 46.127C60.6445 46.0762 60.5039 46.0059 60.3789 45.916C60.2539 45.8262 60.1426 45.7227 60.0449 45.6055C59.9512 45.4844 59.8691 45.3535 59.7988 45.2129V42.4414C59.8652 42.3008 59.9453 42.1719 60.0391 42.0547C60.1367 41.9336 60.248 41.8281 60.373 41.7383C60.4941 41.6523 60.6328 41.5859 60.7891 41.5391C60.9453 41.4883 61.1172 41.4629 61.3047 41.4629C61.4766 41.4629 61.6328 41.4824 61.7734 41.5215C61.9141 41.5605 62.041 41.6152 62.1543 41.6855C62.3184 41.7832 62.457 41.918 62.5703 42.0898C62.6836 42.2617 62.7754 42.4512 62.8457 42.6582C62.8965 42.8262 62.9336 43.0059 62.957 43.1973C62.9844 43.3848 62.998 43.5781 62.998 43.7773ZM73.0117 47H74.9863C75.3965 46.9961 75.7773 46.9473 76.1289 46.8535C76.4844 46.7598 76.8027 46.625 77.084 46.4492C77.3496 46.2812 77.5898 46.0781 77.8047 45.8398C78.0195 45.6016 78.1973 45.3359 78.3379 45.043C78.4746 44.7617 78.5781 44.4531 78.6484 44.1172C78.7227 43.7812 78.7598 43.4258 78.7598 43.0508V42.4238C78.7559 42.0332 78.7148 41.666 78.6367 41.3223C78.5625 40.9785 78.4531 40.6621 78.3086 40.373C78.1484 40.0332 77.9336 39.7344 77.6641 39.4766C77.3984 39.2148 77.0918 39.0039 76.7441 38.8438C76.4941 38.7266 76.2207 38.6367 75.9238 38.5742C75.6309 38.5078 75.3184 38.4727 74.9863 38.4688H73.0117V47ZM74.1133 39.3594H74.9863C75.2559 39.3633 75.5039 39.3945 75.7305 39.4531C75.957 39.5078 76.1621 39.5859 76.3457 39.6875C76.6035 39.8242 76.8203 40.0039 76.9961 40.2266C77.1758 40.4453 77.3184 40.6914 77.4238 40.9648C77.5059 41.1758 77.5664 41.4043 77.6055 41.6504C77.6484 41.8926 77.6719 42.1465 77.6758 42.4121V43.0508C77.6719 43.3125 77.6504 43.5645 77.6113 43.8066C77.5723 44.0449 77.5137 44.2676 77.4355 44.4746C77.3457 44.7285 77.2227 44.959 77.0664 45.166C76.9141 45.3691 76.7324 45.541 76.5215 45.6816C76.3223 45.8184 76.0938 45.9238 75.8359 45.998C75.582 46.0723 75.2988 46.1113 74.9863 46.1152H74.1133V39.3594ZM83.1309 47.1172C83.748 47.1172 84.2656 46.9941 84.6836 46.748C85.1055 46.498 85.4219 46.2129 85.6328 45.8926L84.9707 45.377C84.7715 45.6348 84.5215 45.8418 84.2207 45.998C83.9199 46.1543 83.5762 46.2324 83.1895 46.2324C82.8965 46.2324 82.6289 46.1777 82.3867 46.0684C82.1445 45.959 81.9375 45.8086 81.7656 45.6172C81.5977 45.4375 81.4648 45.2305 81.3672 44.9961C81.2734 44.7617 81.2129 44.4902 81.1855 44.1816V44.1406H85.7148V43.6543C85.7148 43.2129 85.6582 42.8027 85.5449 42.4238C85.4355 42.0449 85.2676 41.7148 85.041 41.4336C84.8145 41.1562 84.5293 40.9395 84.1855 40.7832C83.8457 40.623 83.4473 40.543 82.9902 40.543C82.627 40.543 82.2715 40.6172 81.9238 40.7656C81.5801 40.9141 81.2734 41.127 81.0039 41.4043C80.7305 41.6855 80.5117 42.0293 80.3477 42.4355C80.1836 42.8379 80.1016 43.2949 80.1016 43.8066V44.0527C80.1016 44.4941 80.1758 44.9023 80.3242 45.2773C80.4727 45.6523 80.6797 45.9766 80.9453 46.25C81.2109 46.5234 81.5293 46.7363 81.9004 46.8887C82.2754 47.041 82.6855 47.1172 83.1309 47.1172ZM82.9902 41.4336C83.2676 41.4336 83.5059 41.4844 83.7051 41.5859C83.9082 41.6875 84.0762 41.8203 84.209 41.9844C84.3418 42.1484 84.4453 42.3438 84.5195 42.5703C84.5938 42.793 84.6309 43.002 84.6309 43.1973V43.25H81.2207C81.2637 42.957 81.3379 42.6992 81.4434 42.4766C81.5527 42.25 81.6855 42.0586 81.8418 41.9023C81.998 41.75 82.1738 41.6348 82.3691 41.5566C82.5645 41.4746 82.7715 41.4336 82.9902 41.4336ZM89.6992 47H90.5254L93.1094 40.6602H92.002L90.2266 45.4414L90.1211 45.834L90.0215 45.4414L88.2051 40.6602H87.0918L89.6992 47Z"/>
                <path id="text-item2" d="M43.0156 26.5195L44.6914 30H45.834L45.8398 29.9297L44.0293 26.2852C44.2637 26.1836 44.4785 26.0605 44.6738 25.916C44.8691 25.7715 45.0371 25.6055 45.1777 25.418C45.3184 25.2305 45.4277 25.0215 45.5059 24.791C45.5879 24.5605 45.6289 24.3066 45.6289 24.0293C45.6289 23.5996 45.5527 23.2266 45.4004 22.9102C45.252 22.5898 45.0469 22.3242 44.7852 22.1133C44.5195 21.9023 44.2109 21.7441 43.8594 21.6387C43.5078 21.5332 43.1328 21.4766 42.7344 21.4688H40.2324V30H41.3105V26.5195H43.0156ZM41.3105 25.6289V22.3594H42.7344C42.9961 22.3633 43.2363 22.4004 43.4551 22.4707C43.6777 22.541 43.8691 22.6445 44.0293 22.7812C44.1895 22.9219 44.3145 23.0957 44.4043 23.3027C44.4941 23.5059 44.5391 23.7441 44.5391 24.0176C44.5391 24.2754 44.4922 24.5039 44.3984 24.7031C44.3047 24.8984 44.1777 25.0645 44.0176 25.2012C43.8535 25.3379 43.6641 25.4434 43.4492 25.5176C43.2344 25.5879 43.0059 25.625 42.7637 25.6289H41.3105ZM47.0938 26.7715V26.9004C47.0938 27.3574 47.1602 27.7812 47.293 28.1719C47.4258 28.5625 47.6172 28.9023 47.8672 29.1914C48.1133 29.4805 48.4141 29.707 48.7695 29.8711C49.1289 30.0352 49.5332 30.1172 49.9824 30.1172C50.4277 30.1172 50.8281 30.0352 51.1836 29.8711C51.5391 29.707 51.8418 29.4805 52.0918 29.1914C52.3379 28.9023 52.5273 28.5625 52.6602 28.1719C52.793 27.7812 52.8594 27.3574 52.8594 26.9004V26.7715C52.8594 26.3145 52.793 25.8906 52.6602 25.5C52.5273 25.1055 52.3379 24.7637 52.0918 24.4746C51.8418 24.1855 51.5371 23.959 51.1777 23.7949C50.8223 23.627 50.4199 23.543 49.9707 23.543C49.5254 23.543 49.125 23.627 48.7695 23.7949C48.4141 23.959 48.1133 24.1855 47.8672 24.4746C47.6172 24.7637 47.4258 25.1055 47.293 25.5C47.1602 25.8906 47.0938 26.3145 47.0938 26.7715ZM48.1777 26.9004V26.7715C48.1777 26.4629 48.2148 26.168 48.2891 25.8867C48.3633 25.6016 48.4766 25.3516 48.6289 25.1367C48.7773 24.9219 48.9629 24.752 49.1855 24.627C49.4082 24.498 49.6699 24.4336 49.9707 24.4336C50.2715 24.4336 50.5332 24.498 50.7559 24.627C50.9824 24.752 51.1719 24.9219 51.3242 25.1367C51.4727 25.3516 51.584 25.6016 51.6582 25.8867C51.7363 26.168 51.7754 26.4629 51.7754 26.7715V26.9004C51.7754 27.2129 51.7383 27.5117 51.6641 27.7969C51.5898 28.0781 51.4785 28.3262 51.3301 28.541C51.1777 28.7559 50.9883 28.9258 50.7617 29.0508C50.5391 29.1758 50.2793 29.2383 49.9824 29.2383C49.6816 29.2383 49.418 29.1758 49.1914 29.0508C48.9648 28.9258 48.7773 28.7559 48.6289 28.541C48.4766 28.3262 48.3633 28.0781 48.2891 27.7969C48.2148 27.5117 48.1777 27.2129 48.1777 26.9004ZM59.9785 26.9004V26.7773C59.9785 26.4453 59.9512 26.1309 59.8965 25.834C59.8418 25.5332 59.7617 25.2598 59.6562 25.0137C59.5547 24.7949 59.4375 24.5977 59.3047 24.4219C59.1719 24.2422 59.0215 24.0898 58.8535 23.9648C58.666 23.832 58.457 23.7285 58.2266 23.6543C57.9961 23.5801 57.7441 23.543 57.4707 23.543C57.252 23.543 57.0488 23.5645 56.8613 23.6074C56.6738 23.6504 56.502 23.7129 56.3457 23.7949C56.2207 23.8613 56.1035 23.9414 55.9941 24.0352C55.8848 24.125 55.7852 24.2266 55.6953 24.3398V21H54.6113V30H55.6074L55.6602 29.2793C55.7305 29.3691 55.8047 29.4512 55.8828 29.5254C55.9609 29.5996 56.043 29.668 56.1289 29.7305C56.3086 29.8555 56.5098 29.9512 56.7324 30.0176C56.959 30.084 57.209 30.1172 57.4824 30.1172C57.7207 30.1172 57.9414 30.0879 58.1445 30.0293C58.3516 29.9707 58.541 29.8887 58.7129 29.7832C58.9512 29.6309 59.1543 29.4395 59.3223 29.209C59.4941 28.9746 59.6328 28.7109 59.7383 28.418C59.8164 28.1953 59.875 27.957 59.9141 27.7031C59.957 27.4453 59.9785 27.1777 59.9785 26.9004ZM58.8945 26.7773V26.9004C58.8945 27.0879 58.8828 27.2715 58.8594 27.4512C58.8359 27.6309 58.7988 27.7988 58.748 27.9551C58.6855 28.1621 58.6016 28.3496 58.4961 28.5176C58.3906 28.6855 58.2598 28.8242 58.1035 28.9336C57.9863 29.0195 57.8535 29.0859 57.7051 29.1328C57.5566 29.1758 57.3926 29.1973 57.2129 29.1973C57.0254 29.1973 56.8535 29.1738 56.6973 29.127C56.541 29.0762 56.4004 29.0059 56.2754 28.916C56.1504 28.8262 56.0391 28.7227 55.9414 28.6055C55.8477 28.4844 55.7656 28.3535 55.6953 28.2129V25.4414C55.7617 25.3008 55.8418 25.1719 55.9355 25.0547C56.0332 24.9336 56.1445 24.8281 56.2695 24.7383C56.3906 24.6523 56.5293 24.5859 56.6855 24.5391C56.8418 24.4883 57.0137 24.4629 57.2012 24.4629C57.373 24.4629 57.5293 24.4824 57.6699 24.5215C57.8105 24.5605 57.9375 24.6152 58.0508 24.6855C58.2148 24.7832 58.3535 24.918 58.4668 25.0898C58.5801 25.2617 58.6719 25.4512 58.7422 25.6582C58.793 25.8262 58.8301 26.0059 58.8535 26.1973C58.8809 26.3848 58.8945 26.5781 58.8945 26.7773ZM61.9824 23.6602V24.6035H64.1387V29.0625H61.9824V30H67.291V29.0625H65.2227V23.6602H61.9824ZM63.998 21.9961C63.998 22.1719 64.0508 22.3184 64.1562 22.4355C64.2656 22.5527 64.4297 22.6113 64.6484 22.6113C64.8633 22.6113 65.0254 22.5527 65.1348 22.4355C65.2441 22.3184 65.2988 22.1719 65.2988 21.9961C65.2988 21.8984 65.2832 21.8086 65.252 21.7266C65.2207 21.6445 65.1738 21.5762 65.1113 21.5215C65.0605 21.4707 64.9961 21.4316 64.918 21.4043C64.8398 21.373 64.75 21.3574 64.6484 21.3574C64.5469 21.3574 64.4551 21.373 64.373 21.4043C64.2949 21.4316 64.2305 21.4707 64.1797 21.5215C64.1172 21.5801 64.0703 21.6504 64.0391 21.7324C64.0117 21.8145 63.998 21.9023 63.998 21.9961ZM69.0195 30H70.1035V25.4531C70.1777 25.3164 70.2637 25.1914 70.3613 25.0781C70.4629 24.9648 70.5723 24.8652 70.6895 24.7793C70.834 24.6816 70.9922 24.6055 71.1641 24.5508C71.3359 24.4922 71.5215 24.4629 71.7207 24.4629C71.9512 24.4629 72.1543 24.4902 72.3301 24.5449C72.5098 24.5996 72.6621 24.6875 72.7871 24.8086C72.9082 24.9297 73 25.0879 73.0625 25.2832C73.125 25.4785 73.1562 25.7168 73.1562 25.998V30H74.2402V25.9746C74.2402 25.5527 74.1875 25.1895 74.082 24.8848C73.9805 24.5762 73.834 24.3223 73.6426 24.123C73.4512 23.9238 73.2188 23.7773 72.9453 23.6836C72.6758 23.5898 72.375 23.543 72.043 23.543C71.7969 23.5469 71.5625 23.584 71.3398 23.6543C71.1211 23.7207 70.918 23.8164 70.7305 23.9414C70.6055 24.0234 70.4863 24.1211 70.373 24.2344C70.2637 24.3438 70.1621 24.4648 70.0684 24.5977L69.9922 23.6602H69.0195V30ZM80.4395 28.3184C80.4395 28.4199 80.4199 28.5156 80.3809 28.6055C80.3418 28.6953 80.2852 28.7773 80.2109 28.8516C80.0898 28.9727 79.9219 29.0684 79.707 29.1387C79.4922 29.2051 79.2402 29.2383 78.9512 29.2383C78.7676 29.2383 78.582 29.2188 78.3945 29.1797C78.207 29.1406 78.0371 29.0742 77.8848 28.9805C77.7285 28.8867 77.5977 28.7637 77.4922 28.6113C77.3906 28.459 77.332 28.2715 77.3164 28.0488H76.2324C76.2324 28.3184 76.293 28.5781 76.4141 28.8281C76.5391 29.0781 76.7188 29.2969 76.9531 29.4844C77.1836 29.6758 77.4668 29.8301 77.8027 29.9473C78.1387 30.0605 78.5215 30.1172 78.9512 30.1172C79.3262 30.1172 79.6719 30.0723 79.9883 29.9824C80.3047 29.8926 80.5762 29.7656 80.8027 29.6016C81.0293 29.4375 81.2051 29.2402 81.3301 29.0098C81.459 28.7793 81.5234 28.5234 81.5234 28.2422C81.5234 27.9805 81.4668 27.75 81.3535 27.5508C81.2441 27.3516 81.084 27.1758 80.873 27.0234C80.6621 26.875 80.4023 26.748 80.0938 26.6426C79.7852 26.5332 79.4355 26.4375 79.0449 26.3555C78.748 26.2969 78.502 26.2363 78.3066 26.1738C78.1152 26.1113 77.9629 26.041 77.8496 25.9629C77.7324 25.8848 77.6504 25.7969 77.6035 25.6992C77.5566 25.6016 77.5332 25.4902 77.5332 25.3652C77.5332 25.2441 77.5625 25.127 77.6211 25.0137C77.6797 24.9004 77.7676 24.8008 77.8848 24.7148C77.998 24.6289 78.1406 24.5605 78.3125 24.5098C78.4883 24.459 78.6914 24.4336 78.9219 24.4336C79.1445 24.4336 79.3438 24.4648 79.5195 24.5273C79.6992 24.5898 79.8516 24.6719 79.9766 24.7734C80.1016 24.875 80.1992 24.9922 80.2695 25.125C80.3398 25.2539 80.375 25.3867 80.375 25.5234H81.459C81.459 25.2461 81.3984 24.9883 81.2773 24.75C81.1602 24.5078 80.9922 24.2969 80.7734 24.1172C80.5547 23.9375 80.2891 23.7969 79.9766 23.6953C79.6641 23.5938 79.3125 23.543 78.9219 23.543C78.5586 23.543 78.2246 23.5918 77.9199 23.6895C77.6191 23.7871 77.3594 23.9199 77.1406 24.0879C76.9219 24.2559 76.752 24.4531 76.6309 24.6797C76.5098 24.9023 76.4492 25.1426 76.4492 25.4004C76.4492 25.6621 76.5078 25.8926 76.625 26.0918C76.7422 26.2871 76.9082 26.457 77.123 26.6016C77.334 26.75 77.5879 26.877 77.8848 26.9824C78.1855 27.0879 78.5176 27.1777 78.8809 27.252C79.1777 27.3105 79.4258 27.377 79.625 27.4512C79.8242 27.5215 79.9844 27.5996 80.1055 27.6855C80.2266 27.7715 80.3125 27.8672 80.3633 27.9727C80.4141 28.0742 80.4395 28.1895 80.4395 28.3184ZM83.1289 26.7715V26.9004C83.1289 27.3574 83.1953 27.7812 83.3281 28.1719C83.4609 28.5625 83.6523 28.9023 83.9023 29.1914C84.1484 29.4805 84.4492 29.707 84.8047 29.8711C85.1641 30.0352 85.5684 30.1172 86.0176 30.1172C86.4629 30.1172 86.8633 30.0352 87.2188 29.8711C87.5742 29.707 87.877 29.4805 88.127 29.1914C88.373 28.9023 88.5625 28.5625 88.6953 28.1719C88.8281 27.7812 88.8945 27.3574 88.8945 26.9004V26.7715C88.8945 26.3145 88.8281 25.8906 88.6953 25.5C88.5625 25.1055 88.373 24.7637 88.127 24.4746C87.877 24.1855 87.5723 23.959 87.2129 23.7949C86.8574 23.627 86.4551 23.543 86.0059 23.543C85.5605 23.543 85.1602 23.627 84.8047 23.7949C84.4492 23.959 84.1484 24.1855 83.9023 24.4746C83.6523 24.7637 83.4609 25.1055 83.3281 25.5C83.1953 25.8906 83.1289 26.3145 83.1289 26.7715ZM84.2129 26.9004V26.7715C84.2129 26.4629 84.25 26.168 84.3242 25.8867C84.3984 25.6016 84.5117 25.3516 84.6641 25.1367C84.8125 24.9219 84.998 24.752 85.2207 24.627C85.4434 24.498 85.7051 24.4336 86.0059 24.4336C86.3066 24.4336 86.5684 24.498 86.791 24.627C87.0176 24.752 87.207 24.9219 87.3594 25.1367C87.5078 25.3516 87.6191 25.6016 87.6934 25.8867C87.7715 26.168 87.8105 26.4629 87.8105 26.7715V26.9004C87.8105 27.2129 87.7734 27.5117 87.6992 27.7969C87.625 28.0781 87.5137 28.3262 87.3652 28.541C87.2129 28.7559 87.0234 28.9258 86.7969 29.0508C86.5742 29.1758 86.3145 29.2383 86.0176 29.2383C85.7168 29.2383 85.4531 29.1758 85.2266 29.0508C85 28.9258 84.8125 28.7559 84.6641 28.541C84.5117 28.3262 84.3984 28.0781 84.3242 27.7969C84.25 27.5117 84.2129 27.2129 84.2129 26.9004ZM90.6406 30H91.7246V25.4531C91.7988 25.3164 91.8848 25.1914 91.9824 25.0781C92.084 24.9648 92.1934 24.8652 92.3105 24.7793C92.4551 24.6816 92.6133 24.6055 92.7852 24.5508C92.957 24.4922 93.1426 24.4629 93.3418 24.4629C93.5723 24.4629 93.7754 24.4902 93.9512 24.5449C94.1309 24.5996 94.2832 24.6875 94.4082 24.8086C94.5293 24.9297 94.6211 25.0879 94.6836 25.2832C94.7461 25.4785 94.7773 25.7168 94.7773 25.998V30H95.8613V25.9746C95.8613 25.5527 95.8086 25.1895 95.7031 24.8848C95.6016 24.5762 95.4551 24.3223 95.2637 24.123C95.0723 23.9238 94.8398 23.7773 94.5664 23.6836C94.2969 23.5898 93.9961 23.543 93.6641 23.543C93.418 23.5469 93.1836 23.584 92.9609 23.6543C92.7422 23.7207 92.5391 23.8164 92.3516 23.9414C92.2266 24.0234 92.1074 24.1211 91.9941 24.2344C91.8848 24.3438 91.7832 24.4648 91.6895 24.5977L91.6133 23.6602H90.6406V30Z"/>
                </g>
                </g>
            </svg>    
        </div>   */}
        <nav className="header__nav flex-row flex-center-y">
            <div className="nav__item">
                <a className="nav__item-a" href="#inicio">Inicio</a>
            </div>
            <div className="nav__item">
                <a className="nav__item-a" href="#aboutme">Sobre mi</a>
            </div>
            <div className="nav__item">
                <a className="nav__item-a" href="#skills">Skills</a>
            </div>
            <div className="nav__item">
                <a className="nav__item-a"href="#portafolio">Portafolio</a>
            </div>
        </nav>
</header>
    );
}


export default Header;