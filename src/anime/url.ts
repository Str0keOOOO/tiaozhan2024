import jishuURL from '../image/jishu.svg?url'
import meigongURL from '../image/meigong.svg?url'
import shipinURL from '../image/shipin.svg?url'
import starURL from '../image/star.svg?url'
import monitorMidURL from '../image/monitor-mid.svg?url'
import monitorLeftURL from '../image/monitor-left.svg?url'
import monitorRightURL from '../image/monitor-right.svg?url'

export function urlSet() {
  let enterLogo = document.querySelectorAll('.enter-logo') as any
  let monitorMid = document.querySelector('.monitor-mid') as any
  let monitorLeft = document.querySelector('.monitor-left') as any
  let monitorRight = document.querySelector('.monitor-right') as any
  enterLogo[0].data = jishuURL
  enterLogo[1].data = meigongURL
  enterLogo[2].data = shipinURL
  enterLogo[4].data = starURL
  monitorMid.data = monitorMidURL
  monitorLeft.data = monitorLeftURL
  monitorRight.data = monitorRightURL
}