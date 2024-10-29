import React from "react";
import gridStyles from "./Styles/gridStyles.module.css";
import appStyles from "./Styles/appStyles.module.css"; 
import Gameboard from "./Components/Gameboard";
import Square from "./Components/Square";
import Console from "./Components/Console";

const App: React.FC = () => {
  return (
      <React.StrictMode> 
        <div className={`${appStyles.container} ${appStyles.flex}`}>
          <Gameboard>
            <Square className={gridStyles.row1Left} value="1" />
            <Square className={gridStyles.row1Mid} value="2" />
            <Square className={gridStyles.row1Right} value="3" />
            <Square className={gridStyles.row2Left} value="X" />
            <Square className={gridStyles.row2Mid} value="X" />
            <Square className={gridStyles.row2Right} value="X" />
            <Square className={gridStyles.row3Left} value="X" />
            <Square className={gridStyles.row3Mid} value="X" />
            <Square className={gridStyles.row3Right} value="X" />
          </Gameboard>
          <Console value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend urna magna, id sodales neque pretium id. Ut posuere, ante et vulputate convallis, enim eros mattis nibh, in tincidunt nibh dui et magna. Suspendisse congue dapibus viverra. Aenean blandit dolor dui, ut aliquam felis semper quis. Sed sed tortor volutpat, facilisis tortor nec, malesuada enim. Phasellus libero nibh, pellentesque vitae dignissim sed, bibendum quis sem. Donec aliquet tempor lectus, non pharetra mi euismod vitae.

Praesent urna ligula, vulputate ut odio eget, laoreet tristique turpis. Suspendisse laoreet risus vel bibendum pretium. Phasellus porttitor, nibh non gravida aliquam, sapien nisi bibendum orci, a maximus ipsum mi ac nulla. In hac habitasse platea dictumst. Phasellus ultricies eros mauris, eget pharetra lacus porttitor ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus massa felis, posuere a tellus ac, semper gravida ipsum. Suspendisse potenti. Fusce est tortor, blandit vel libero et, ornare cursus justo. Quisque hendrerit neque sem, quis mollis augue sodales ac. In massa neque, finibus sit amet eros ut, aliquet ullamcorper mi. Suspendisse id metus et tellus tempus tristique sit amet ut nisi.

Suspendisse rutrum molestie nulla, eu commodo lorem tincidunt ut. Sed elit metus, efficitur quis mollis a, maximus in justo. Phasellus nisl diam, dignissim nec ex vitae, viverra blandit quam. Morbi porta maximus sapien nec maximus. Ut volutpat eu purus ac condimentum. Donec ut dignissim urna. Vestibulum eu nunc accumsan, pulvinar lorem vitae, mattis augue. Aenean ante dolor, ullamcorper sit amet urna blandit, feugiat vestibulum risus. Proin consequat neque vel neque condimentum, in venenatis massa dapibus. Nunc varius laoreet purus vel efficitur.

Phasellus eleifend nulla eget nunc laoreet faucibus. Integer dapibus placerat nunc. Vivamus dignissim risus sem, a suscipit elit volutpat a. Donec porta, tortor et rhoncus commodo, lectus dui gravida diam, non accumsan orci elit convallis mauris. Morbi facilisis purus sem, non aliquam risus iaculis sed. Sed ac massa vitae sapien tincidunt eleifend ac ornare arcu. Morbi leo ex, luctus ut pretium quis, commodo hendrerit felis. Mauris et leo pharetra, ultricies eros vitae, volutpat est. Etiam mi dui, semper in sollicitudin id, elementum sed nibh. Nulla sed felis lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer facilisis tellus a blandit luctus. Phasellus laoreet sapien mauris, sed ullamcorper nunc finibus a. Maecenas faucibus, dolor ut congue venenatis, enim nunc suscipit ante, non dapibus purus felis quis ante. Cras sed auctor sem.

Morbi vehicula urna id convallis sagittis. Phasellus enim ante, consectetur sed tincidunt sed, luctus non quam. Mauris suscipit vehicula lectus, vitae gravida magna euismod a. Vivamus venenatis diam a ante blandit, non lobortis dolor viverra. In efficitur sagittis mi eu tempor. Sed laoreet arcu eu lacinia consequat. Nulla elit lectus, varius et lacinia et, lacinia eget libero." />
        </div>
      </React.StrictMode>
  );
};

export default App;