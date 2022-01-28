import type { Player } from "src/interfaces/PlayerInterface";

export let players : Player[] = [
    {
        id: 1,
        nickname: "Yama",
        name: "Yanda Mahaputra",
        role: "Duelist",
        agent: "Yoru",
        agentpicture : "/static/yoru.webp",
        desc: "Yanda \"Yama\" Mahaputra. Our resident lurker duelist. With his yoru, he is able to create 200IQ play. Outplaying opponent and outplaying himself"
    },
    {
        id: 2,
        nickname: "Ryve",
        name: "Sudimahendra",
        role: "Sentinel",
        agent: "Chamber",
        agentpicture : "/static/chamber.png",
        desc: "\"Ryve\" Sudimahendra. Our beloved sentinel. Using chamber he can hold enemies, chiping 1 by 1 with his Tour de Force"
    },
    {
        id: 3,
        nickname: "Kuff",
        name: "Abhyseka Dwikurmha",
        role: "Initiator",
        agent: "Breach",
        agentpicture : "/static/breach.webp",
        desc: "Abhyseka \"Kuff\" Dwikurmha. Our game-sense initiator master. He's able to support his team and create opportunities for his team"
    },
    {
        id: 4,
        nickname: "loveu",
        name: "Aditya Dharma",
        role: "Duelist",
        agent: "Raze",
        agentpicture : "/static/raze.webp",
        desc: "Aditya \"loveu\" Dharma. Storming down to site, opening a window with his satchel boost. Killing his opponent and clearing site"
    },
    {
        id: 5,
        nickname: "Vyn",
        name: "Alvin Wiraprathama",
        role: "Controller",
        agent: "Omen",
        agentpicture : "/static/omen.webp",
        desc: "Alvin \"Vyn\" Wiraprathama. Smoking down a site, and controlling the game. He's able to create a lot of play with his omen and support teammate with his flash"
    }
]