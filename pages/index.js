import styles from '../styles/Home.module.css'
import { useRouter } from "next/router"
import { DataMatrixGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';
import { DataMatrixVersion } from '@grapecity/wijmo.barcode.specialized'; //
import { BarcodeDataMatrixEcc000 } from '@grapecity/wijmo.react.barcode.specialized';
import Image from 'next/image'
const Home = () => {
  const router = useRouter()
  const version = DataMatrixVersion.Ecc100
  const cte = {
    network: router.query.network,
    dest: router.query.dest,
    boxes: router.query.boxes,
    city: router.query.city,
    fridges: router.query.fridges,
    zona: router.query.zone
  }

  const generateDatamatrixData = (index) => {
    const code = `${cte.network}U${index}U${cte.boxes}U${cte.city}`
    return code
  }


  const iterateItems = () => {
    let indents = []
    
    for (let i = 0;  i < cte.boxes ; i++) {
      indents.push (
        <div
          style={pStyles.itemContainer}
        >
          <div
            style={{flex: .7}}
          >
            <div>
              <Image 
                alt='Barcode Generator TEC-IT'
                src={`https://barcode.tec-it.com/barcode.ashx?data=${generateDatamatrixData(i + 1)}&code=DataMatrix`}
                width={150}
                height={150}
              />
            </div>
            <div>
              <span
                style={pStyles.textValues}
              >
                {cte.zona} 
              </span>
            </div>
          </div>
          <div
            style={{flex: .3, alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div style={{marginTop: '10px', marginBottom:'10px'}}>
              <span
                style={pStyles.textValues}
              >
                { cte.network }
              </span>
            </div> 
            <div style={{marginTop: '10px', marginBottom:'10px'}}>
              <span
                style={pStyles.textValues}
              >
                {`000${i + 1} de 000${cte.boxes}`}
              </span>
            </div>
            <div style={{marginTop: '10px', marginBottom:'10px'}}>
              <span
                style={pStyles.textValues}
              >
                { cte.city }
              </span> 
            </div>
          </div>
        </div>
      ) 
    }
    return indents
  } 
  return (
    <div className={styles.container}>
      {iterateItems()}
    </div>
  )
}

export default Home
const pStyles = {
  itemContainer: {
    padding: '10px', 
    border: '2px solid black',
    marginTop: '5px',
    marginBottom: '5px',
    width: '100%',
    flexDirection: 'row',
    borderRadius: '5px',
    display: 'flex'
  },
  textValues: {
    fontWeight: 'bold',
    fontSize: '17px',
  }
}
