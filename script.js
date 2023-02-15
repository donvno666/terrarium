// 借由id为依据, 以DOM搜寻网页内的物件
// 辨别完每一个物件后,传给待编辑的函数dragElement, 让html物件可以被移动
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
	let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault(); // 取消pointerdown的预设事件
        console.log(e)
        pos3 = e.clientX;
        pos4 = e.clientY; // 初始化游标位置
        document.onpointermove = elementDrag; // 移动鼠标时开始拖拽
        document.onpointerup = stopElementDrag; // 松开鼠标时停止拖拽
    }

    function elementDrag(e) {
        // pos1为 鼠标之前的位置-现在的位置
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        // 重置鼠标位置
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }

    function stopElementDrag() {
        // 松开鼠标时停止计算
        document.onpointerup = null;
        document.onpointermove = null;
    }
}