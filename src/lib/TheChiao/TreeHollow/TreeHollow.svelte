<script>
    import Collection from './Collection.svelte';


    const collections = [
        {
            name: "Geckos",
            website: "https://www.galacticgeckos.app/",
            image: "/images/ggsg.png",
            number: 1830,
            twitter: "https://twitter.com/GalacticGeckoSG",
            marketplace: "https://www.tensor.trade/trade/galactic_geckos"
        },
        {
            name: "Foxes",
            website: "https://famousfoxes.com/",
            image: "/images/fff.png",
            number: 591,
            twitter: "https://twitter.com/FamousFoxFed",
            marketplace: "https://www.tensor.trade/trade/famous_fox_federation"
        },
        {
            name: "Degen Apes",
            website: "https://www.degenape.academy/",
            image: "/images/DAA.png",
            number: 389,
            twitter: "https://twitter.com/DegenApeAcademy",
            marketplace: "https://www.tensor.trade/trade/degenerate_ape_academy"
        },
        {
            name: "Claynos",
            website: "https://claynosaurz.com/",
            image: "/images/claynosaurz.png",
            number: 184,
            twitter: "https://twitter.com/Claynosaurz",
            marketplace: "https://www.tensor.trade/trade/claynosaurz"
        },
        {
            name: "SMBs",
            website: "https://solanamonkey.business/",
            image: "/images/smb.png",
            number: 114,
            twitter: "https://twitter.com/SolanaMBS",
            marketplace: "https://www.tensor.trade/trade/solana_monkey_business"
        },
        {
            name: "Okay Bears",
            website: "https://www.okaybears.com/",
            image: "/images/okay.png",
            number: 117,
            twitter: "https://twitter.com/okaybears",
            marketplace: "https://www.tensor.trade/trade/okay_bears"
        },
        {
            name: "TYRs",
            website: "https://taiyorobotics.com/",
            image: "/images/taiyo.png",
            number: 49,
            twitter: "https://twitter.com/TaiyoRobotics",
            marketplace: "https://www.tensor.trade/trade/taiyo_robotics"
        },
        {
            name: "MBBs",
            website: "https://www.monkeybaby.business/",
            image: "/images/MBB.png",
            number: 107,
            twitter: "https://twitter.com/MonkeyBabyBiz",
            marketplace: "https://www.tensor.trade/trade/monkey_baby_business"
        },
        {
            name: "Tensorians",
            website: "https://tensor.trade/",
            image: "/images/tensor.png",
            number: 45,
            twitter: "https://twitter.com/tensor_hq",
            marketplace: "https://www.tensor.trade/trade/tensorians"
        },
        {
            name: "Anons",
            website: "https://theanonclub.com/",
            image: "/images/anon.png",
            number: 79,
            twitter: "https://twitter.com/theanonclub",
            marketplace: "https://www.tensor.trade/trade/888_anon_club"
        },
        {
            name: "Mad Lads",
            website: "https://madlads.com/",
            image: "/images/madlads.png",
            number: 43,
            twitter: "https://twitter.com/MadLads",
            marketplace: "https://www.tensor.trade/trade/madlads"
        },
        {
            name: "Degen Pandas",
            website: "https://degentrashpandas.com/",
            image: "/images/DTP.png",
            number: 815,
            twitter: "https://twitter.com/DegenTrashPanda",
            marketplace: "https://www.tensor.trade/trade/degenerate_trash_pandas"
        },
    ];

</script>

<section class="sectionContainer">
    <h2 class="subsectionHeading">The Tree Hollow</h2>
	<div class="subsectionParagraph">
        <p>The Chimpions are the silent force behind the Solana ecosystem, providing essential support to many of the projects that make it up.
		</p>
        <p>Below are some assets of The Chimpions members.</p>
		<br/>
    </div>
    <div class="collections">
        {#each collections as collection}
            <Collection
                website = {collection.website}
                name = {collection.name}
                image = {collection.image}
                numberOfThisCollection = {collection.number}
                twitter = {collection.twitter}
                marketplace = {collection.marketplace}
            />
        {/each}
	</div>

</section>



<style>
    .sectionContainer {
        width: 100%;
        margin-bottom: 6rem;
    }

    .collections {
        --numberOfColumns: 1;
        --column-gap: calc(80vw - var(--numberOfColumns) * 250px);
        margin: auto;
        display: grid;
        grid-template-columns: repeat(var(--numberOfColumns), 250px);
        width: fit-content;
        row-gap: calc(var(--column-gap) /3);
        column-gap: var(--column-gap);
        justify-items: center;
    }

    @media screen and (min-width: 700px) {
        .collections {
            --numberOfColumns: 2;
            --column-gap: calc((80vw - var(--numberOfColumns) * 250px) / var(--numberOfColumns));
            row-gap: calc(var(--column-gap) * 350 / 250);
        }
    }

    @media screen and (min-width: 1000px) {
        .collections {
            --numberOfColumns: 3;
        }
    }

    @media screen and (min-width: 1300px) {
        .collections {
            --numberOfColumns: 4;
        }
    }
</style>