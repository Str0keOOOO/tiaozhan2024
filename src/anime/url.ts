import jishuURL from '../image/jishu.svg?url'
import meigongURL from '../image/meigong.svg?url'
import shipinURL from '../image/shipin.svg?url'
import starURL from '../image/star.svg?url'
import monitorMidURL from '../image/monitor-mid.svg?url'
import monitorLeftURL from '../image/monitor-left.svg?url'
import monitorRightURL from '../image/monitor-right.svg?url'

async function loadSvg(url: string): Promise<SVGElement | null> {
  const response = await fetch(url);
  if (!response.ok) {
    console.error('Failed to load SVG');
    return null;
  }
  const text = await response.text();
  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(text, 'image/svg+xml') as any;
  return svgDoc.documentElement as SVGElement;
}

export async function urlSet() {
  let enterLogo = document.querySelectorAll('.enter-logo') as NodeListOf<HTMLObjectElement>
  let monitorMid = document.querySelector('.monitor-mid') as any
  let monitorLeft = document.querySelector('.monitor-left') as any
  let monitorRight = document.querySelector('.monitor-right') as any
  enterLogo[0].data = jishuURL
  enterLogo[1].data = meigongURL
  enterLogo[2].data = shipinURL
  monitorMid.data = monitorMidURL
  monitorLeft.data = monitorLeftURL
  monitorRight.data = monitorRightURL

  const enterLogoStar = await loadSvg(starURL) as SVGElement
  enterLogoStar.classList.add(...enterLogo[4].classList)
  enterLogoStar.style.opacity = '0'
  const temp_id = enterLogo[4].id
  enterLogo[4].parentNode?.insertBefore(enterLogoStar, enterLogo[4])
  enterLogo[4].parentNode?.removeChild(enterLogo[4])
  enterLogoStar.id = temp_id
  let svgList:Promise<SVGElement | null>[] = []
  const objList = [enterLogo[0], enterLogo[1], enterLogo[2], monitorMid, monitorLeft, monitorRight]
  for(const obj of objList) {
    svgList.push(loadSvg(obj.data))
    
  }
  for(const index in objList){
    let obj = objList[index]
    let svgElePromise = svgList[index]
    const svgEle = <SVGElement>await svgElePromise
    svgEle.classList.add(...obj.classList)
    obj.parentNode?.insertBefore(svgEle, obj)
    obj.parentNode?.removeChild(obj)
  }

  document.body.classList.remove("set-opacity")

}
