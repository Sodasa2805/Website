function tooltipClick() {
	const tooltipsClick = Array.from(document.querySelectorAll('[click-tooltip-container]'));

	tooltipsClick.map(tooltipClick => {
		tooltipClick.addEventListener('mouseover', handleMouseOver);
	})

	function handleMouseOver() {
		const tooltipboxClick = createClickTooltipBox();

		handleMouseMove.tooltipboxClick = tooltipboxClick;
		this.addEventListener('mousemove', handleMouseMove);

		handleMouseLeave.tooltipboxClick = tooltipboxClick;
		handleMouseLeave.element = this;
		this.addEventListener('mouseleave', handleMouseLeave);
	}

	const handleMouseLeave = {
		handleEvent() {
			this.tooltipboxClick.remove();
			this.element.removeEventListener('mousemove', handleMouseMove);
			this.element.removeEventListener('mouseleave', handleMouseLeave);
		}
	}

	const handleMouseMove = {
		handleEvent(e) {
			this.tooltipboxClick.style.top = e.clientY + 10 + 'px';
			this.tooltipboxClick.style.left = e.clientX + 10 +'px';
		}
	}

	function createClickTooltipBox() {
		let tooltipClick = document.createElement('div');
		tooltipClick.innerText = 'Click to the next page';
		tooltipClick.classList.add('tooltip-click');

		document.body.appendChild(tooltipClick);
		
		return tooltipClick;
	}
}

tooltipClick();