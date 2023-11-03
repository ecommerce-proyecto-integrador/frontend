import monoMesaRedondaBlack from '../public/mono mesa redonda black.png'
import monoMesaRedondaBlue from '../public/mono mesa redonda blue.png'
import monoMesaRedondaRed from '../public/mono mesa redonda red.png'
import Img from '../public/Placeholder.jpg'

export const product = {
    id: "3",
    name: "Mono en mesa redonda",
    description:
      "In a mesmerizing, otherworldly scene, a painting unveils an enigmatic gathering at a round table, shrouded in an aura of mysticism and intrigue. The focal point of the composition is a peculiar duo—a mischievous monkey and a duende, a mystical creature from folklore—engaged in an exchange that transcends the boundaries of the known world.The setting is ethereal, bathed in an iridescent glow that emanates from an array of mystical symbols etched into the tables surface. The table itself seems to pulse with ancient energy, depicting constellations, sigils, and arcane markings that seem to come alive as if responding to the secrets being discussed.The duende, with its diminutive stature, exudes an air of wisdom and whimsy. Its ancient eyes hold a depth of knowledge that spans centuries, while its weathered appearance is a testament to its connection to the secrets of the universe. It wears a cloak woven from threads of starlight and possesses an aura that hints at unseen forces at play.Beside the duende, the mischievous monkey, adorned with a crown of vibrant, exotic flowers, seems to be the embodiment of playful curiosity. With an intelligence that belies its animal form, the monkey appears engaged in an animated conversation with the duende, gesturing with lively excitement as if deciphering secrets of the cosmos.Surrounding this central pair, the scene is populated by a surreal congregation of ethereal beings—sylphs, sprites, and shadowy apparitions—observing the exchange with a mix of reverence and mischievous curiosity. The creatures, each a guardian of their realm, add an additional layer of mystery and magic to the tableau.The background is a tapestry of swirling colors, suggesting an interdimensional meeting place that exists beyond the tangible world. Its a realm where the boundaries between reality and the supernatural blur, where arcane knowledge and mystical wisdom converge.This painting, with its rich symbolism and mystical ambiance, invites the viewer to contemplate the secrets of the universe, the interconnectedness of all beings, and the timeless pursuit of knowledge that transcends the limitations of the seen world.",
    price: 100,
    brand: "Monobrand",
    category: "Category C",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:monoMesaRedondaBlack.src,
      },
      {
        color: "Blue",
        colorCode: " #0000FF",
        image:monoMesaRedondaBlue.src,
      },
      {
        color: "Red",
        colorCode: "#FF0000",
        image:monoMesaRedondaRed.src,
      },
    ],
    reviews: [
      {
        id: "2",
        userId: "2",
        productId: "3",
        rating: 4,
        comment:
          "mono en mesa redonda bottom text",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "2",
          name: "Carlosweed",
          email: "example1@gmail.com",
          emailVerified: null,
          image: null,
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "3",
        userId: "1",
        productId: "3",
        rating: 4,
        comment: "top text mono mesa redonda",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "1",
          name: "ElMatoi",
          email: "example@gmail.com",
          emailVerified: null,
          image:Img.src,
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  };