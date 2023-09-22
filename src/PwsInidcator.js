import React from 'react'
import zxcvbn from 'zxcvbn';

const PwsInidcator = ({pwd}) => {

const testResult = zxcvbn(pwd);
const num = testResult.score* 100/4;

const createPwdlevel = ()=>{
  switch(testResult.score){
    case 0:
      return ' very weak';
      case 1:
        return 'weak';
      case 2:
        return 'fear';
      case 3:
        return 'good';
      case 4:
        return 'strong';
         default:
          return '';
  }
}

    const funcProgresscolor= ()=>{
      switch(testResult.score){
        case 0:
          return ' #828282';
          case 1:
            return '#ea1111';
          case 2:
            return '#ffd00';
          case 3:
            return '#9bc518';
          case 4:
            return '#00b500';
             default:
              return 'none';
      }
    }

    const pwdIndicatorColor = ()=>({

        width: `${num}%`,
     background: funcProgresscolor(),
    height: '7px'
    })

  return (
    <>
    <div className='progress col-md-6 mx-auto my-2' >
        <div className='progress-bar' style={pwdIndicatorColor()}></div>
    </div>
        <p style={{color: funcProgresscolor(), marginLeft: '540px' }}>{createPwdlevel()}</p>
    </>
  )
}

export default PwsInidcator