import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  return (
    <Box sx={{ width: "90%", minHeight: 829 }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
                borderRadius: '12px',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
      {
        img: 'https://cdn.leonardo.ai/users/37470eb6-bcdf-4c95-a5f8-f2f9c663a319/generations/807f64b1-d3d8-4857-8c2c-093aabba6e34/3D_Animation_Style_a_fierce_and_determined_warrior_who_had_bee_1.jpg',
        title: 'Confused Woman Figher',
      },  
      {
        img: 'https://cdn.leonardo.ai/users/37470eb6-bcdf-4c95-a5f8-f2f9c663a319/generations/4f8af7dd-bcbd-4bb2-a85c-79e0d20ef9da/3D_Animation_Style_Akari_the_pintsized_warrior_stands_ready_fo_3.jpg',
        title: 'Portait of a determine young woman',
      },  
      {
        img: 'https://cdn.leonardo.ai/users/37470eb6-bcdf-4c95-a5f8-f2f9c663a319/generations/4cdf0dfb-f708-4938-9113-c0703b5871aa/3D_Animation_Style_Akari_is_small_for_her_age_12_years_old_wit_3.jpg',
        title: 'Young Anime Girl',
      },  
      {
        img: 'https://cdn.leonardo.ai/users/37470eb6-bcdf-4c95-a5f8-f2f9c663a319/generations/d767f6bb-2984-4b95-b0de-b506ab852e86/variations/Default_Akari_the_pintsized_warrior_stands_ready_for_battle_wi_0_d767f6bb-2984-4b95-b0de-b506ab852e86_1.jpg',
        title: ' Yound Akari Yamamoto',
      },
  {
    img: 'https://cdn.leonardo.ai/users/37470eb6-bcdf-4c95-a5f8-f2f9c663a319/generations/807f64b1-d3d8-4857-8c2c-093aabba6e34/3D_Animation_Style_a_fierce_and_determined_warrior_who_had_bee_0.jpg',
    title: 'Underdog',
  },
  {
    img: 'https://cdn.midjourney.com/8bb35146-e0da-4c93-9d9a-d0ed55d21776/0_3.png',
    title: 'Read Everything',
  },
  {
    img: 'https://cdn.midjourney.com/8bb35146-e0da-4c93-9d9a-d0ed55d21776/0_2.webp',
    title: 'Find Happiness in Reading',
  },
  {
    img: 'https://cdn.midjourney.com/310b4c3f-30ed-4c4d-8b72-d962e6f55e1b/0_1.png',
    title: 'Opportunity',
  },
  {
    img: 'https://cdn.midjourney.com/310b4c3f-30ed-4c4d-8b72-d962e6f55e1b/0_0_384_N.webp',
    title: 'Explore Opportunities',
  },
  {
    img: 'https://cdn.midjourney.com/75860d42-f238-4f58-a01a-2ee63604b1f2/0_2_384_N.webp',
    title: 'Underwater',
  },
  {
    img: 'https://cdn.midjourney.com/cb625adc-35d9-480d-aeed-2e067ad31ecc/0_2.png',
    title: 'Excited AlohaLani',
  },
  {
    img: 'https://cdn.midjourney.com/16555258-a6e1-49aa-9fec-f2fe694d9f33/0_3.png',
    title: 'Tropical Hawaii',
  },
  {
    img: 'https://cdn.midjourney.com/5e50922d-341a-42a9-a847-9efe7029b937/0_0_384_N.webp',
    title: 'AllohaLani, Hawaiian AI Assistant',
  },
  {
    img: 'https://cdn.midjourney.com/0ccca71f-2af7-4eb3-b784-9e0b2808b0aa/0_0.png',
    title: 'AlohaLani, Hawaiian AI Assistant',
  },
  {
    img: 'https://cdn.midjourney.com/0ccca71f-2af7-4eb3-b784-9e0b2808b0aa/0_2.png',
    title: 'AlohaLani, Hawaiian AI Assistant',
  },
  {
    img: 'https://cdn.midjourney.com/f6c7dbf2-f91a-41e5-8b93-1b3fec9ceae9/0_0.png',
    title: 'Old Western Bar',
  },
  {
    img: 'https://cdn.midjourney.com/11ff402c-c826-4d25-b125-760bb84b191e/0_0.png',
    title: 'Maverick, Cowboy',
  },
  {
    img: 'https://cdn.midjourney.com/86098ba7-8dcb-4604-9d3d-ee356945549b/0_2.png',
    title: 'Western Bar',
  },
  {
    img: 'https://cdn.midjourney.com/af3f40fa-0045-45b8-9ec0-74b67d90bdd9/0_3.png',
    title: 'Little boy with imagination',
  },
  {
    img: 'https://cdn.midjourney.com/b80665a4-4dd5-4672-9104-b8e601d1cca0/0_2_384_N.webp',
    title: 'Antogonist',
  },
  {
    img: 'https://cdn.midjourney.com/42db826a-7120-4341-b424-b9700d13a6e0/0_2.png',
    title: 'Darth Light Saber',
  },
  {
    img: 'https://cdn.midjourney.com/70516058-69f9-4cea-8e1f-600e7c1f2828/0_0_384_N.webp',
    title: 'Woman with a light saber',
  },
  {
    img: 'https://cdn.midjourney.com/b23ebb82-b387-423d-8d9b-6d5a7cd8fa65/0_1.png',
    title: 'Samurai Girl',
  },
  {
    img: 'https://cdn.midjourney.com/8b18b496-4f51-4ad0-b818-239b7c4064b7/0_3.png',
    title: 'Young Samurai Girl',
  },
  {
    img: 'https://cdn.midjourney.com/30f1d184-76a4-4ff0-b56b-e6f64465508a/0_2_384_N.webp',
    title: 'More Mature Samurai Girl',
  },
  {
    img: 'https://cdn.midjourney.com/2bc71146-4af2-491b-8358-891eeaf07756/0_3_384_N.webp',
    title: 'Space Traveler',
  },
  {
    img: 'https://cdn.midjourney.com/66ce092b-94b2-493b-aff8-df59111b6712/0_2_384_N.webp',
    title: 'Space Exploerer',
  },
  {
    img: 'https://cdn.midjourney.com/734e91e9-b4d0-4bee-b5a2-402d7ab3e0f2/0_0_384_N.webp',
    title: 'Young Princess',
  },
  {
    img: 'https://cdn.midjourney.com/d7e1dd04-9d89-4ba1-87e5-5d081fa4514e/0_2_384_N.webp',
    title: 'Viking Warriror',
  },
  {
    img: 'https://cdn.midjourney.com/d7e1dd04-9d89-4ba1-87e5-5d081fa4514e/0_0_384_N.webp',
    title: 'Warrior',
  },
  {
    img: 'https://cdn.midjourney.com/d7e1dd04-9d89-4ba1-87e5-5d081fa4514e/0_1.png',
    title: 'Polynesian Warrior',
  },
  {
    img: 'https://cdn.midjourney.com/f29ad4df-bb66-4f6d-b573-995bc2968244/0_1_384_N.webp',
    title: 'White Queen',
  },
  {
    img: 'https://cdn.midjourney.com/dca1cc23-e052-4156-bd6f-c2fc68296204/0_2.png',
    title: 'RedHead Woman Warrior',
  },
  {
    img: 'https://cdn.midjourney.com/6ae804be-0e19-460f-8217-34c901c0352f/0_3_384_N.webp',
    title: 'Enchanted Forest',
  },
  {
    img: 'https://cdn.midjourney.com/fb91ba53-37cd-4eac-9ac5-4c3407af2ffc/0_3_384_N.webp',
    title: 'Futuristic City',
  },
  {
    img: 'https://cdn.midjourney.com/7e58bcaa-bb7e-4fd9-8bf5-1eb5487331fc/0_1_384_N.webp',
    title: 'Lush Forest',
  },
  {
    img: 'https://cdn.midjourney.com/afa56d74-d650-4bcb-997d-7ca3e9a475f4/0_3_384_N.webp',
    title: 'Forest Ruins',
  },
  {
    img: 'https://cdn.midjourney.com/e8714b16-692a-4ad7-a4a7-d84a86b16bd2/0_1_384_N.webp',
    title: 'Big Moon Curoisity',
  },
  {
    img: 'https://cdn.midjourney.com/5c050aed-122a-4677-83b4-6de1551a0ca1/0_2.png',
    title: 'Glowing Lanterns',
  },
  {
    img: 'https://cdn.midjourney.com/fda79f6b-9cfc-4f94-8676-d54c72f363ae/0_0_384_N.webp',
    title: 'Sunrise Shirt Design',
  },
  {
    img: 'https://cdn.midjourney.com/134f01db-23d7-46a3-b43d-624517a3e3b6/0_1_384_N.webp',
    title: 'Sunset Shirt Design',
  },
  {
    img: 'https://cdn.midjourney.com/6fe92474-6078-4d8b-b49e-af09ccc8ea52/0_3_384_N.webp',
    title: 'Stylised Maverick Warrior',
  },
  {
    img: 'https://cdn.midjourney.com/34063689-0a1e-4b45-951a-2377bc727b24/0_0.png',
    title: 'One Piece Loofy',
  },
  {
    img: 'https://cdn.midjourney.com/03ef8243-de04-42d7-8650-1d349a36d2ed/0_2.png',
    title: 'Hawaiian Beauty',
  },
  {
    img: 'https://cdn.midjourney.com/e4296444-82da-4065-afde-065e570e6c41/0_2.png',
    title: 'Darth Vader Programming',
  },
  {
    img: 'https://cdn.midjourney.com/12fd4ef4-c352-4957-9c6f-ff876d84cbe8/0_2.png',
    title: 'Darth Programmer',
  },
  {
    img: 'https://cdn.midjourney.com/2307b0a0-2a23-4b0d-888a-6221c2281b9d/0_1_384_N.webp',
    title: 'Young Lion',
  },
  {
    img: 'https://cdn.midjourney.com/824ddc25-5822-4985-b7e5-054864e04d95/0_2.png',
    title: 'Mafia',
  },
  {
    img: 'https://cdn.midjourney.com/68c90c87-ea30-45a4-84ec-c46091bc8fe2/0_0.png',
    title: 'Bandit Woman',
  },
  {
    img: 'https://cdn.midjourney.com/db067199-3cab-4155-a5e6-f1e1d640f13b/0_0.png',
    title: 'Mature Tech Woman',
  },
  {
    img: 'https://cdn.midjourney.com/4f9741ac-9154-4f1a-8414-b22d9688d137/0_0.png',
    title: 'Creative artistic woman',
  },
  {
    img: 'https://cdn.midjourney.com/7756e3e2-ecdf-44d5-a930-a1a5528d4abc/0_0.png',
    title: 'Asain Western Woman',
  },
  {
    img: 'https://cdn.midjourney.com/b4d79ac2-65af-44a7-9843-7b7870c77860/0_0_384_N.webp',
    title: 'Golf Hawaii, Diamond Head',
  },
  {
    img: 'https://cdn.midjourney.com/328b42a7-68a4-4bb9-80d3-b9a02e1a8ce2/0_0_384_N.webp',
    title: 'Golf Course',
  },
  {
    img: 'https://cdn.midjourney.com/2ad988a2-b5ab-4acb-b220-7e312b0b951f/0_0_384_N.webp',
    title: 'Island Golf Course',
  },
  {
    img: 'https://cdn.midjourney.com/91f59ae9-5653-4fe4-8dbe-809c43cf89c8/0_0_384_N.webp',
    title: 'Island Golf Course',
  },
  {
    img: 'https://cdn.midjourney.com/dcee25c8-c1ad-46d8-8b98-2b66ff00742b/0_0.png',
    title: 'Face Painting',
  },
  {
    img: 'https://cdn.midjourney.com/11ebe20c-eef1-4f52-9e99-57d2c3d2b2dd/0_0.png',
    title: 'Abstract Face Painting',
  },
  {
    img: 'https://cdn.midjourney.com/5b0bebcc-1885-4eeb-bab2-23f22b56af68/0_0.png',
    title: 'Wooden Structure',
  },
  {
    img: 'https://cdn.midjourney.com/32a6196c-f6a4-4436-9e39-c7a99772514a/0_0_384_N.webp',
    title: 'Dinosuar Portrait',
  },
  {
    img: 'https://cdn.midjourney.com/134411a1-8c49-44c2-bbb5-793b56c8790b/0_0.png',
    title: 'Portal To Heaven',
  },
  {
    img: 'https://cdn.midjourney.com/5e0d9106-09fa-48ce-806a-2a099f36ee3b/0_0.png',
    title: 'Organic Star',
  },
  {
    img: 'https://cdn.midjourney.com/c4ba7e29-8efb-4ed0-ae24-267ba9105c6b/0_0.png',
    title: 'Organic Star',
  },
  {
    img: 'https://cdn.midjourney.com/cecd669a-ed8e-4cfe-878c-2fbc6a398bde/0_0.png',
    title: 'Alien Art',
  },
  {
    img: 'https://cdn.midjourney.com/c075b257-87e5-4f03-b292-a9c83776c818/0_0.png',
    title: 'Graphite Flower',
  },
  {
    img: 'https://cdn.midjourney.com/b5daed6a-2223-4179-b447-b7fabd4bcdb0/0_0.png',
    title: 'Symbolism of a Flower',
  },
];