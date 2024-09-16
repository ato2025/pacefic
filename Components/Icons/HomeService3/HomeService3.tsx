import { useAppSelector } from '@/Store/StoreConfigs'
import React from 'react'

function HomeService3() {
  const {theme}=useAppSelector(state=>state.theme)
  return (
    <>
    {
      theme == 'dark' ?(
<svg className='w-[28px]  lg:w-[42px] lg:h-[42px]' viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.19995 64H63.3599" stroke="white" strokeWidth="4" strokeLinecap="round"/>
<path d="M31.6801 24.1126L21.4401 27.5264V24.32C21.4401 23.3015 21.8446 22.3248 22.5648 21.6047C23.2849 20.8845 24.2616 20.48 25.2801 20.48H38.0801C39.0985 20.48 40.0752 20.8845 40.7954 21.6047C41.5155 22.3248 41.9201 23.3015 41.9201 24.32V27.5264L31.6801 24.1126ZM44.4801 40.96C44.4801 41.4003 43.6071 42.24 42.2401 42.24C41.8497 42.2548 41.4609 42.182 41.1023 42.027C40.7437 41.8719 40.4244 41.6386 40.1677 41.344C41.5307 40.0179 42.6144 38.4325 43.355 36.6811C44.0956 34.9297 44.4782 33.0478 44.4801 31.1462V31.0771L32.9601 27.2371V40.96H30.4001V27.2384L18.8801 31.0784V31.1475C18.8831 33.0494 19.267 34.9314 20.0089 36.6826C20.7508 38.4338 21.8359 40.0187 23.2001 41.344C22.9425 41.6394 22.6219 41.8734 22.2619 42.0284C21.9019 42.1835 21.5117 42.2558 21.1201 42.24C19.7261 42.24 18.8801 41.3516 18.8801 40.96H16.3201C16.3201 43.0412 18.5191 44.8 21.1201 44.8C22.409 44.8097 23.6585 44.3554 24.6401 43.52C25.628 44.3419 26.8717 44.7934 28.1568 44.7967C29.442 44.7999 30.688 44.3548 31.6801 43.5379C32.6722 44.3548 33.9182 44.7999 35.2033 44.7967C36.4884 44.7934 37.7321 44.3419 38.7201 43.52C39.7013 44.3551 40.9503 44.8094 42.2388 44.8C44.841 44.8 47.0401 43.0412 47.0401 40.96H44.4801ZM36.8001 16.64C36.8001 15.961 36.5304 15.3099 36.0503 14.8298C35.5702 14.3497 34.919 14.08 34.2401 14.08H29.1201C28.4411 14.08 27.79 14.3497 27.3099 14.8298C26.8298 15.3099 26.5601 15.961 26.5601 16.64V17.92H36.8001V16.64Z" fill="#957BFF"/>
<path d="M31.3497 62.72C26.4015 62.72 21.4198 61.0871 17.5415 57.8505C7.67854 49.5695 -3.22087 36.3607 0.891483 20.6442C4.60263 6.38572 18.8789 0 31.3497 0C31.3497 0 31.3497 0 31.3831 0C43.8539 0 58.1301 6.38572 61.8413 20.6734C65.9202 36.3898 55.0208 49.5695 45.1578 57.8505C41.2795 61.0871 36.2979 62.72 31.3497 62.72ZM31.3497 4.37378C21.6204 4.37378 9.1162 8.89335 5.80625 21.6065C2.1954 35.3401 12.0918 47.1785 21.0521 54.6722C26.8361 59.5417 35.8967 59.5417 41.6807 54.6722C50.6075 47.1785 60.5039 35.3401 56.96 21.6065C53.6166 8.89335 41.0789 4.37378 31.3497 4.37378Z" fill="white"/>
</svg>
      ):(
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.09961 42H41.5796" stroke="#1F2227" strokeWidth="4" strokeLinecap="round"/>
        <path d="M1.69417 13.8365L1.6938 13.8379C-0.818647 23.4399 5.80997 31.6804 12.2473 37.0856C14.5684 39.022 17.5708 40.0139 20.5732 40.0139C23.5757 40.0139 26.5781 39.022 28.8992 37.0856C35.337 31.68 41.9661 23.4576 39.4741 13.855L1.69417 13.8365ZM1.69417 13.8365C3.9467 5.18209 12.6739 1.14609 20.5732 1.14609M1.69417 13.8365L20.5732 1.14609M20.5732 1.14609H20.5732M20.5732 1.14609H20.5732M20.5732 1.14609H20.5733M20.5732 1.14609H20.5733M20.5733 1.14609H20.5733M20.5733 1.14609H20.5733M20.5733 1.14609H20.5733M20.5733 1.14609H20.5733M20.5733 1.14609H20.5733M20.5733 1.14609H20.5733M20.5733 1.14609H20.5733M20.5733 1.14609H20.5733M20.5733 1.14609H20.5733M20.5733 1.14609H20.5733M20.5733 1.14609H20.5733M20.5733 1.14609H20.5733M20.5733 1.14609H20.5734M20.5733 1.14609H20.5734M20.5734 1.14609H20.5734M20.5734 1.14609H20.5734M20.5734 1.14609H20.5734M20.5734 1.14609H20.5734M20.5734 1.14609H20.5734M20.5734 1.14609H20.5734M20.5734 1.14609H20.5734M20.5734 1.14609H20.5734M20.5734 1.14609H20.5734M20.5734 1.14609H20.5734M20.5734 1.14609H20.5735M20.5734 1.14609H20.5735M20.5735 1.14609H20.5735M20.5735 1.14609H20.5735M20.5735 1.14609H20.5735M20.5735 1.14609H20.5735M20.5735 1.14609H20.5735M20.5735 1.14609H20.5735M20.5735 1.14609H20.5735M20.5735 1.14609H20.5735M20.5735 1.14609H20.5736M20.5735 1.14609H20.5736M20.5736 1.14609H20.5736M20.5736 1.14609H20.5736M20.5736 1.14609H20.5736M20.5736 1.14609H20.5736M20.5736 1.14609H20.5736M20.5736 1.14609H20.5736M20.5736 1.14609H20.5736M20.5736 1.14609H20.5736M20.5736 1.14609H20.5736M20.5736 1.14609H20.5736M20.5736 1.14609H20.5737M20.5736 1.14609H20.5737M20.5737 1.14609H20.5737M20.5737 1.14609H20.5737M20.5737 1.14609H20.5737M20.5737 1.14609H20.5737M20.5737 1.14609H20.5737M20.5737 1.14609H20.5737M20.5737 1.14609H20.5737M20.5737 1.14609H20.5737M20.5737 1.14609H20.5738M20.5737 1.14609H20.5738M20.5738 1.14609H20.5738M20.5738 1.14609H20.5738M20.5738 1.14609H20.5738M20.5738 1.14609H20.5738M20.5738 1.14609H20.5738M20.5738 1.14609H20.5738M20.5738 1.14609H20.5738M20.5738 1.14609H20.5738M20.5738 1.14609H20.5739M20.5738 1.14609H20.5739M20.5739 1.14609H20.5739M20.5739 1.14609H20.5739M20.5739 1.14609H20.5739M20.5739 1.14609H20.5739M20.5739 1.14609H20.5739M20.5739 1.14609H20.5739M20.5739 1.14609H20.574M20.5739 1.14609H20.574M20.574 1.14609H20.574M20.574 1.14609H20.574M20.574 1.14609H20.574M20.574 1.14609H20.574M20.574 1.14609H20.574M20.574 1.14609H20.574M20.574 1.14609H20.5741M20.574 1.14609H20.5741M20.5741 1.14609H20.5741M20.5741 1.14609H20.5741M20.5741 1.14609H20.5741M20.5741 1.14609H20.5741M20.5741 1.14609H20.5741M20.5741 1.14609H20.5741M20.5741 1.14609H20.5741M20.5741 1.14609H20.5741M20.5741 1.14609H20.5741M20.5741 1.14609H20.5741M20.5741 1.14609H20.5742M20.5741 1.14609H20.5742M20.5742 1.14609H20.5742M20.5742 1.14609H20.5742M20.5742 1.14609H20.5742M20.5742 1.14609H20.5742M20.5742 1.14609H20.5742M20.5742 1.14609H20.5742M20.5742 1.14609H20.5742M20.5742 1.14609H20.5742M20.5742 1.14609H20.5742M20.5742 1.14609H20.5742M20.5742 1.14609H20.5743M20.5742 1.14609H20.5743M20.5743 1.14609H20.5743M20.5743 1.14609H20.5743M20.5743 1.14609H20.5743M20.5743 1.14609H20.5743M20.5743 1.14609H20.5743M20.5743 1.14609H20.5743M20.5743 1.14609H20.5743M20.5743 1.14609H20.5743M20.5743 1.14609H20.5743M20.5743 1.14609H20.5743M20.5743 1.14609H20.5744M20.5743 1.14609H20.5744M20.5744 1.14609H20.5744M20.5744 1.14609H20.5744M20.5744 1.14609H20.5744M20.5744 1.14609H20.5744M20.5744 1.14609H20.5744M20.5744 1.14609H20.5744M20.5744 1.14609H20.5744M20.5744 1.14609H20.5744M20.5744 1.14609H20.5745M20.5744 1.14609H20.5745M20.5745 1.14609H20.5745M20.5745 1.14609H20.5745M20.5745 1.14609H20.5745M20.5745 1.14609H20.5745M20.5745 1.14609H20.5745M20.5745 1.14609H20.5745M20.5745 1.14609H20.5745M20.5745 1.14609H20.5745M20.5745 1.14609H20.5746M20.5745 1.14609H20.5746M20.5746 1.14609H20.5746M20.5746 1.14609H20.5746M20.5746 1.14609H20.5746M20.5746 1.14609H20.5746M20.5746 1.14609H20.5746M20.5746 1.14609H20.5746M20.5746 1.14609H20.5746M20.5746 1.14609H20.5746M20.5746 1.14609H20.5747M20.5746 1.14609H20.5747M20.5747 1.14609H20.5747M20.5747 1.14609H20.5747M20.5747 1.14609H20.5747M20.5747 1.14609H20.5747M20.5747 1.14609H20.5747M20.5747 1.14609H20.5747M20.5747 1.14609H20.5747M20.5747 1.14609H20.5747M20.5747 1.14609H20.5748M20.5747 1.14609H20.5748M20.5748 1.14609H20.5748M20.5748 1.14609H20.5748M20.5748 1.14609H20.5748M20.5748 1.14609H20.5748M20.5748 1.14609H20.5748M20.5748 1.14609H20.5748M20.5748 1.14609H20.5748M20.5748 1.14609H20.5748M20.5748 1.14609H20.5749M20.5748 1.14609H20.5749M20.5749 1.14609H20.5749M20.5749 1.14609H20.5749M20.5749 1.14609H20.5749M20.5749 1.14609H20.5749M20.5749 1.14609H20.5749M20.5749 1.14609H20.5749M20.5749 1.14609H20.575M20.5749 1.14609H20.575M20.575 1.14609H20.575M20.575 1.14609H20.575M20.575 1.14609H20.575M20.575 1.14609H20.575M20.575 1.14609H20.575M20.575 1.14609H20.575M20.575 1.14609H20.5751M20.575 1.14609H20.5751M20.5751 1.14609H20.5751M20.5751 1.14609H20.5751M20.5751 1.14609H20.5751M20.5751 1.14609H20.5751M20.5751 1.14609H20.5751M20.5751 1.14609H20.5751M20.5751 1.14609H20.5752M20.5751 1.14609H20.5752M20.5752 1.14609H20.5752M20.5752 1.14609H20.5752M20.5752 1.14609H20.5752M20.5752 1.14609H20.5752M20.5752 1.14609H20.5752M20.5752 1.14609H20.5752M20.5752 1.14609H20.5753M20.5752 1.14609H20.5753M20.5753 1.14609H20.5753M20.5753 1.14609H20.5753M20.5753 1.14609H20.5753M20.5753 1.14609H20.5753M20.5753 1.14609H20.5753M20.5753 1.14609H20.5753M20.5753 1.14609H20.5754M20.5753 1.14609H20.5754M20.5754 1.14609H20.5754M20.5754 1.14609H20.5754M20.5754 1.14609H20.5754M20.5754 1.14609H20.5754M20.5754 1.14609H20.5755M20.5754 1.14609H20.5755M20.5755 1.14609H20.5755M20.5755 1.14609H20.5755M20.5755 1.14609H20.5755M20.5755 1.14609H20.5755M20.5755 1.14609H20.5755M20.5755 1.14609H20.5755M20.5755 1.14609H20.5756M20.5755 1.14609H20.5756M20.5756 1.14609H20.5756M20.5756 1.14609H20.5756M20.5756 1.14609H20.5756M20.5756 1.14609H20.5756M20.5756 1.14609H20.5757M20.5756 1.14609H20.5757M20.5757 1.14609H20.5757M20.5757 1.14609H20.5757M20.5757 1.14609H20.5757M20.5757 1.14609H20.5757M20.5757 1.14609H20.5757M20.5757 1.14609H20.5757M20.5757 1.14609H20.5758M20.5757 1.14609H20.5758M20.5758 1.14609H20.5758M20.5758 1.14609H20.5758M20.5758 1.14609H20.5758M20.5758 1.14609H20.5758M20.5758 1.14609H20.5759M20.5758 1.14609H20.5759M20.5759 1.14609H20.5759M20.5759 1.14609H20.5759M20.5759 1.14609H20.5759M20.5759 1.14609H20.5759M20.5759 1.14609H20.576M20.5759 1.14609H20.576M20.576 1.14609H20.576M20.576 1.14609H20.576M20.576 1.14609H20.576M20.576 1.14609H20.576M20.576 1.14609H20.5761M20.576 1.14609H20.5761M20.5761 1.14609H20.5761M20.5761 1.14609H20.5761M20.5761 1.14609H20.5761M20.5761 1.14609H20.5761M20.5761 1.14609H20.5762M20.5761 1.14609H20.5762M20.5762 1.14609H20.5762M20.5762 1.14609H20.5762M20.5762 1.14609H20.5762M20.5762 1.14609H20.5762M20.5762 1.14609H20.5763M20.5762 1.14609H20.5763M20.5763 1.14609H20.5763M20.5763 1.14609H20.5763M20.5763 1.14609H20.5763M20.5763 1.14609H20.5763M20.5763 1.14609H20.5764M20.5763 1.14609H20.5764M20.5764 1.14609H20.5764M20.5764 1.14609H20.5764M20.5764 1.14609H20.5764M20.5764 1.14609H20.5764M20.5764 1.14609H20.5765M20.5764 1.14609H20.5765M20.5765 1.14609H20.5765M20.5765 1.14609H20.5765M20.5765 1.14609H20.5765M20.5765 1.14609H20.5765M20.5765 1.14609H20.5766M20.5765 1.14609H20.5766M20.5766 1.14609H20.5766M20.5766 1.14609H20.5766M20.5766 1.14609H20.5767M20.5766 1.14609H20.5767M20.5767 1.14609H20.5767M20.5767 1.14609H20.5767M20.5767 1.14609H20.5767M20.5767 1.14609H20.5767M20.5767 1.14609H20.5768M20.5767 1.14609H20.5768M20.5768 1.14609H20.5768M20.5768 1.14609H20.5768M20.5768 1.14609H20.5769M20.5768 1.14609H20.5769M20.5769 1.14609H20.5769M20.5769 1.14609H20.5769M20.5769 1.14609H20.5769M20.5769 1.14609H20.5769M20.5769 1.14609H20.577M20.5769 1.14609H20.577M20.577 1.14609H20.577M20.577 1.14609H20.577M20.577 1.14609H20.577M20.577 1.14609H20.577M20.577 1.14609H20.5771M20.577 1.14609H20.5771M20.5771 1.14609H20.5771M20.5771 1.14609H20.5771M20.5771 1.14609H20.5772M20.5771 1.14609H20.5772M20.5772 1.14609H20.5772M20.5772 1.14609H20.5772M20.5772 1.14609H20.5773M20.5772 1.14609H20.5773M20.5773 1.14609H20.5773M20.5773 1.14609H20.5773M20.5773 1.14609H20.5773M20.5773 1.14609H20.5773M20.5773 1.14609H20.5774M20.5773 1.14609H20.5774M20.5774 1.14609H20.5774M20.5774 1.14609H20.5774M20.5774 1.14609H20.5775M20.5774 1.14609H20.5775M20.5775 1.14609H20.5775M20.5775 1.14609H20.5775M20.5775 1.14609H20.5775M20.5775 1.14609H20.5775M20.5775 1.14609H20.5776M20.5775 1.14609H20.5776M20.5776 1.14609H20.5776M20.5776 1.14609H20.5776M20.5776 1.14609H20.5777M20.5776 1.14609H20.5777M20.5777 1.14609H20.5777M20.5777 1.14609H20.5777M20.5777 1.14609H20.5778M20.5777 1.14609H20.5778M20.5778 1.14609H20.5778M20.5778 1.14609H20.5778M20.5778 1.14609H20.5779M20.5778 1.14609H20.5779M20.5779 1.14609H20.5779M20.5779 1.14609H20.5779M20.5779 1.14609H20.578M20.5779 1.14609H20.578M20.578 1.14609H20.578M20.578 1.14609H20.578M20.578 1.14609H20.578M20.578 1.14609H20.578M20.578 1.14609H20.5781M20.578 1.14609H20.5781M20.5781 1.14609H20.5781M20.5781 1.14609H20.5781M20.5781 1.14609H20.5782M20.5781 1.14609H20.5782M20.5782 1.14609H20.5782M20.5782 1.14609H20.5782M20.5782 1.14609H20.5783M20.5782 1.14609H20.5783M20.5783 1.14609H20.5783M20.5783 1.14609H20.5783M20.5783 1.14609H20.5784M20.5783 1.14609H20.5784M20.5784 1.14609H20.5784M20.5784 1.14609H20.5784M20.5784 1.14609H20.5785M20.5784 1.14609H20.5785M20.5785 1.14609H20.5785M20.5785 1.14609H20.5785M20.5785 1.14609H20.5786M20.5785 1.14609H20.5786M20.5786 1.14609H20.5786M20.5786 1.14609H20.5786M20.5786 1.14609H20.5787M20.5786 1.14609H20.5787M20.5787 1.14609H20.5787M20.5787 1.14609H20.5787M20.5787 1.14609H20.5788M20.5787 1.14609H20.5788M20.5788 1.14609H20.5788M20.5788 1.14609H20.5788M20.5788 1.14609H20.5789M20.5788 1.14609H20.5789M20.5789 1.14609H20.5789M20.5789 1.14609H20.5789M20.5789 1.14609H20.579M20.5789 1.14609H20.579M20.579 1.14609H20.579M20.579 1.14609H20.579M20.579 1.14609H20.5791M20.579 1.14609H20.5791M20.5791 1.14609H20.5792M20.5791 1.14609H20.5792M20.5792 1.14609H20.5792M20.5792 1.14609H20.5792M20.5792 1.14609H20.5793M20.5792 1.14609H20.5793M20.5793 1.14609H20.5793M20.5793 1.14609H20.5793M20.5793 1.14609H20.5794M20.5793 1.14609H20.5794M20.5794 1.14609H20.5794M20.5794 1.14609H20.5794M20.5794 1.14609H20.5795M20.5794 1.14609H20.5795M20.5795 1.14609H20.5795M20.5795 1.14609H20.5795M20.5795 1.14609H20.5796M20.5795 1.14609H20.5796M20.5796 1.14609H20.5796M20.5796 1.14609H20.5796M20.5796 1.14609H20.5797M20.5796 1.14609H20.5797M20.5797 1.14609H20.5798M20.5797 1.14609H20.5798M20.5798 1.14609H20.5798M20.5798 1.14609H20.5798M20.5798 1.14609H20.5799M20.5798 1.14609H20.5799M20.5799 1.14609H20.5799M20.5799 1.14609H20.5799M20.5799 1.14609H20.58M20.5799 1.14609H20.58M20.58 1.14609H20.5801M20.58 1.14609H20.5801M20.5801 1.14609H20.5801M20.5801 1.14609H20.5801M20.5801 1.14609H20.5802M20.5801 1.14609H20.5802M20.5802 1.14609H20.5802M20.5802 1.14609H20.5802M20.5802 1.14609H20.5803M20.5802 1.14609H20.5803M20.5803 1.14609H20.5804M20.5803 1.14609H20.5804M20.5804 1.14609H20.5804M20.5804 1.14609H20.5804M20.5804 1.14609H20.5805M20.5804 1.14609H20.5805M20.5805 1.14609H20.5805M20.5805 1.14609H20.5805M20.5805 1.14609H20.5806M20.5805 1.14609H20.5806M20.5806 1.14609H20.5807M20.5806 1.14609H20.5807M20.5807 1.14609H20.5807M20.5807 1.14609H20.5807M20.5807 1.14609H20.5808M20.5807 1.14609H20.5808M20.5808 1.14609H20.5809M20.5808 1.14609H20.5809M20.5809 1.14609H20.5809M20.5809 1.14609H20.5809M20.5809 1.14609H20.581M20.5809 1.14609H20.581M20.581 1.14609H20.581M20.581 1.14609H20.581M20.581 1.14609H20.5811M20.581 1.14609H20.5811M20.5811 1.14609H20.5812M20.5811 1.14609H20.5812M20.5812 1.14609H20.5812M20.5812 1.14609H20.5812M20.5812 1.14609H20.5813M20.5812 1.14609H20.5813M20.5813 1.14609H20.5814M20.5813 1.14609H20.5814M20.5814 1.14609H20.5814M20.5814 1.14609H20.5814M20.5814 1.14609H20.5815M20.5814 1.14609H20.5815M20.5815 1.14609H20.5816M20.5815 1.14609H20.5816M20.5816 1.14609H20.5816M20.5816 1.14609H20.5816M20.5816 1.14609H20.5817M20.5816 1.14609H20.5817M20.5817 1.14609H20.5818M20.5817 1.14609H20.5818M20.5818 1.14609H20.5818M20.5818 1.14609H20.5818M20.5818 1.14609H20.5819M20.5818 1.14609H20.5819M20.5819 1.14609H20.582M20.5819 1.14609H20.582M20.582 1.14609H20.5821M20.582 1.14609H20.5821M20.5821 1.14609H20.5821M20.5821 1.14609H20.5821M20.5821 1.14609H20.5822M20.5821 1.14609H20.5822M20.5822 1.14609H20.5823M20.5822 1.14609H20.5823M20.5823 1.14609H20.5823M20.5823 1.14609H20.5823M20.5823 1.14609H20.5824M20.5823 1.14609H20.5824M20.5824 1.14609H20.5825M20.5824 1.14609H20.5825M20.5825 1.14609H20.5826M20.5825 1.14609H20.5826M20.5826 1.14609H20.5826M20.5826 1.14609H20.5826M20.5826 1.14609H20.5827M20.5826 1.14609H20.5827M20.5827 1.14609H20.5828M20.5827 1.14609H20.5828M20.5828 1.14609H20.5828M20.5828 1.14609H20.5828M20.5828 1.14609H20.5829M20.5828 1.14609H20.5829M20.5829 1.14609H20.583M20.5829 1.14609H20.583M20.583 1.14609H20.5831M20.583 1.14609H20.5831M20.5831 1.14609H20.5831M20.5831 1.14609H20.5831M20.5831 1.14609H20.5832M20.5831 1.14609H20.5832M20.5832 1.14609H20.5833M20.5832 1.14609H20.5833M20.5833 1.14609H20.5834M20.5833 1.14609H20.5834M20.5834 1.14609H20.5835M20.5834 1.14609H20.5835M20.5835 1.14609H20.5835M20.5835 1.14609H20.5835M20.5835 1.14609H20.5836M20.5835 1.14609H20.5836M20.5836 1.14609H20.5837M20.5836 1.14609H20.5837M20.5837 1.14609H20.5838M20.5837 1.14609H20.5838M20.5838 1.14609H20.5838M20.5838 1.14609H20.5838M20.5838 1.14609H20.5839M20.5838 1.14609H20.5839M20.5839 1.14609H20.584M20.5839 1.14609H20.584M20.584 1.14609H20.5841M20.584 1.14609H20.5841M20.5841 1.14609H20.5842M20.5841 1.14609H20.5842M20.5842 1.14609H20.5842M20.5842 1.14609H20.5842M20.5842 1.14609H20.5843M20.5842 1.14609H20.5843M20.5843 1.14609H20.5844M20.5843 1.14609H20.5844M20.5844 1.14609H20.5845M20.5844 1.14609H20.5845M20.5845 1.14609H20.5846M20.5845 1.14609H20.5846M20.5846 1.14609H20.5847M20.5846 1.14609H20.5847M20.5847 1.14609H20.5847M20.5847 1.14609H20.5847M20.5847 1.14609H20.5848M20.5847 1.14609H20.5848M20.5848 1.14609H20.5849M20.5848 1.14609H20.5849M20.5849 1.14609H20.585M20.5849 1.14609H20.585M20.585 1.14609H20.5851M20.585 1.14609H20.5851M20.5851 1.14609H20.5852M20.5851 1.14609H20.5852M20.5852 1.14609H20.5852M20.5852 1.14609H20.5852M20.5852 1.14609H20.5853M20.5852 1.14609H20.5853M20.5853 1.14609H20.5854M20.5853 1.14609H20.5854M20.5854 1.14609H20.5855M20.5854 1.14609H20.5855M20.5855 1.14609H20.5856M20.5855 1.14609H20.5856M20.5856 1.14609H20.5857M20.5856 1.14609H20.5857M20.5857 1.14609H20.5858M20.5857 1.14609H20.5858M20.5858 1.14609H20.5859M20.5858 1.14609H20.5859M20.5859 1.14609H20.586M20.5859 1.14609H20.586M20.586 1.14609H20.586M20.586 1.14609H20.586M20.586 1.14609H20.5861M20.586 1.14609H20.5861M20.5861 1.14609H20.5862M20.5861 1.14609H20.5862M20.5862 1.14609H20.5863M20.5862 1.14609H20.5863M20.5863 1.14609H20.5864M20.5863 1.14609H20.5864M20.5864 1.14609H20.5865M20.5864 1.14609H20.5865M20.5865 1.14609H20.5866M20.5865 1.14609H20.5866M20.5866 1.14609H20.5867M20.5866 1.14609H20.5867M20.5867 1.14609H20.5868M20.5867 1.14609H20.5868M20.5868 1.14609H20.5869M20.5868 1.14609H20.5869M20.5869 1.14609H20.587M20.5869 1.14609H20.587M20.587 1.14609H20.5871M20.587 1.14609H20.5871M20.5871 1.14609H20.5871M20.5871 1.14609H20.5871M20.5871 1.14609H20.5872M20.5871 1.14609H20.5872M20.5872 1.14609H20.5873M20.5872 1.14609H20.5873M20.5873 1.14609H20.5874M20.5873 1.14609H20.5874M20.5874 1.14609H20.5875M20.5874 1.14609H20.5875M20.5875 1.14609H20.5876M20.5875 1.14609H20.5876M20.5876 1.14609H20.5877M20.5876 1.14609H20.5877M20.5877 1.14609H20.5878M20.5877 1.14609H20.5878M20.5878 1.14609H20.5879M20.5878 1.14609H20.5879M20.5879 1.14609H20.588M20.5879 1.14609H20.588M20.588 1.14609H20.5881M20.588 1.14609H20.5881M20.5881 1.14609H20.5882M20.5881 1.14609H20.5882M20.5882 1.14609H20.5883M20.5882 1.14609H20.5883M20.5883 1.14609H20.5884M20.5883 1.14609H20.5884M20.5884 1.14609H20.5885M20.5884 1.14609H20.5885M20.5885 1.14609H20.5886M20.5885 1.14609H20.5886M20.5886 1.14609H20.5887M20.5886 1.14609H20.5887M20.5887 1.14609H20.5888M20.5887 1.14609H20.5888M20.5888 1.14609H20.5889M20.5888 1.14609H20.5889M20.5889 1.14609H20.589M20.5889 1.14609H20.589M20.589 1.14609H20.5891M20.589 1.14609H20.5891M20.5891 1.14609H20.5892M20.5891 1.14609H20.5892M20.5892 1.14609H20.5893M20.5892 1.14609H20.5893M20.5893 1.14609H20.5894M20.5893 1.14609H20.5894M20.5894 1.14609H20.5896M20.5894 1.14609H20.5896M20.5896 1.14609H20.5897M20.5896 1.14609H20.5897M20.5897 1.14609H20.5898M20.5897 1.14609H20.5898M20.5898 1.14609H20.5899M20.5898 1.14609H20.5899M20.5899 1.14609H20.59M20.5899 1.14609H20.59M20.59 1.14609H20.5901M20.59 1.14609H20.5901M20.5901 1.14609H20.5902M20.5901 1.14609H20.5902M20.5902 1.14609H20.5903M20.5902 1.14609H20.5903M20.5903 1.14609H20.5904M20.5903 1.14609H20.5904M20.5904 1.14609H20.5905M20.5904 1.14609H20.5905M20.5905 1.14609H20.5906M20.5905 1.14609H20.5906M20.5906 1.14609H20.5907M20.5906 1.14609H20.5907M20.5907 1.14609H20.5909M20.5907 1.14609H20.5909M20.5909 1.14609H20.591M20.5909 1.14609H20.591M20.591 1.14609H20.5911M20.591 1.14609H20.5911M20.5911 1.14609H20.5912M20.5911 1.14609H20.5912M20.5912 1.14609H20.5913M20.5912 1.14609H20.5913M20.5913 1.14609H20.5914M20.5913 1.14609H20.5914M20.5914 1.14609H20.5915M20.5914 1.14609H20.5915M20.5915 1.14609H20.5916M20.5915 1.14609H20.5916M20.5916 1.14609H20.5918M20.5916 1.14609H20.5918M20.5918 1.14609H20.5919M20.5918 1.14609H20.5919M20.5919 1.14609H20.592M20.5919 1.14609H20.592M20.592 1.14609H20.5921M20.592 1.14609H20.5921M20.5921 1.14609H20.5922M20.5921 1.14609H20.5922M20.5922 1.14609H20.5923M20.5922 1.14609H20.5923M20.5923 1.14609H20.5925M20.5923 1.14609H20.5925M20.5925 1.14609H20.5926M20.5925 1.14609H20.5926M20.5926 1.14609H20.5927M20.5926 1.14609H20.5927M20.5927 1.14609H20.5928M20.5927 1.14609H20.5928M20.5928 1.14609H20.5929M20.5928 1.14609H20.5929M20.5929 1.14609H20.5931M20.5929 1.14609H20.5931M20.5931 1.14609H20.5932M20.5931 1.14609H20.5932M20.5932 1.14609H20.5933M20.5932 1.14609H20.5933M20.5933 1.14609H20.5934M20.5933 1.14609H20.5934M20.5934 1.14609H20.5935M20.5934 1.14609H20.5935M20.5935 1.14609H20.5937M20.5935 1.14609H20.5937M20.5937 1.14609H20.5938M20.5937 1.14609H20.5938M20.5938 1.14609H20.5939M20.5938 1.14609H20.5939M20.5939 1.14609H20.594M20.5939 1.14609H20.594M20.594 1.14609H20.5942M20.594 1.14609H20.5942M20.5942 1.14609H20.5943M20.5942 1.14609H20.5943M20.5943 1.14609H20.5944M20.5943 1.14609H20.5944M20.5944 1.14609H20.5945M20.5944 1.14609H20.5945M20.5945 1.14609H20.5947M20.5945 1.14609H20.5947M20.5947 1.14609H20.5948M20.5947 1.14609H20.5948M20.5948 1.14609H20.5949M20.5948 1.14609H20.5949M20.5949 1.14609H20.595M20.5949 1.14609H20.595M20.595 1.14609H20.5952M20.595 1.14609H20.5952M20.5952 1.14609C28.4938 1.14609 37.221 5.18144 39.474 13.8548L20.5952 1.14609ZM38.4897 13.8929L38.4884 13.8878C36.1002 4.80659 27.1882 1.7242 20.5732 1.7242C13.958 1.7242 5.06694 4.80711 2.70158 13.8892C1.42263 18.7552 2.55361 23.2567 4.71921 27.1245C6.87551 30.9756 10.0827 34.2507 13.0788 36.7567C17.3008 40.3098 23.868 40.3097 28.0898 36.7565C31.0749 34.2506 34.2763 30.9756 36.4352 27.125C38.6029 23.2586 39.7453 18.7585 38.4897 13.8929Z" stroke="#1F2227" strokeWidth="2.29218"/>
        <path d="M23.3798 31.75H18.6198C14.8398 31.75 11.8698 29.37 11.0498 25.68L10.6398 23.82C10.3598 22.54 11.0898 21.16 12.2998 20.67L19.2298 17.89C20.3698 17.44 21.6298 17.44 22.7698 17.89L29.6998 20.67C30.9198 21.16 31.6498 22.54 31.3598 23.82L30.9498 25.68C30.1298 29.37 27.1598 31.75 23.3798 31.75ZM20.9998 19.05C20.5898 19.05 20.1798 19.13 19.7798 19.28L12.8498 22.06C12.3198 22.27 11.9698 22.94 12.0898 23.49L12.4998 25.35C13.1698 28.37 15.5098 30.24 18.6098 30.24H23.3698C26.4698 30.24 28.8098 28.37 29.4798 25.35L29.8898 23.49C30.0098 22.94 29.6598 22.27 29.1298 22.06L22.1998 19.28C21.8198 19.13 21.4098 19.05 20.9998 19.05Z" fill="#7A5AF5"/>
        <path d="M21 31.75C20.59 31.75 20.25 31.41 20.25 31V19C20.25 18.59 20.59 18.25 21 18.25C21.41 18.25 21.75 18.59 21.75 19V31C21.75 31.41 21.41 31.75 21 31.75Z" fill="#7A5AF5"/>
        <path d="M28.0002 21.55C27.9102 21.55 27.8102 21.53 27.7202 21.5L22.2102 19.29C21.4302 18.98 20.5702 18.98 19.7802 19.29L14.2702 21.5C14.0402 21.59 13.7803 21.56 13.5703 21.42C13.3603 21.28 13.2402 21.05 13.2402 20.8V17C13.2402 14.93 14.9202 13.25 16.9902 13.25H24.9902C27.0602 13.25 28.7402 14.93 28.7402 17V20.8C28.7402 21.05 28.6202 21.28 28.4102 21.42C28.2902 21.51 28.1502 21.55 28.0002 21.55ZM21.0002 17.55C21.6002 17.55 22.2002 17.66 22.7702 17.89L27.2502 19.69V17C27.2502 15.76 26.2402 14.75 25.0002 14.75H17.0002C15.7602 14.75 14.7502 15.76 14.7502 17V19.69L19.2303 17.89C19.8003 17.67 20.4002 17.55 21.0002 17.55Z" fill="#7A5AF5"/>
        <path d="M23.5 14.75H18.5C18.09 14.75 17.75 14.41 17.75 14V12C17.75 11.04 18.54 10.25 19.5 10.25H22.5C23.46 10.25 24.25 11.04 24.25 12V14C24.25 14.41 23.91 14.75 23.5 14.75ZM19.25 13.25H22.75V12C22.75 11.86 22.64 11.75 22.5 11.75H19.5C19.36 11.75 19.25 11.86 19.25 12V13.25Z" fill="#7A5AF5"/>
        </svg>
        
        
        
        
        
        

      )
    }
    </>
    

    

  )
}

export default HomeService3