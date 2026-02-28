const formImage = new Proxy({"src":"/_astro/form.CiF591gV.png","width":1440,"height":510,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/html/form.png";
							}
							
							return target[name];
						}
					});

const inputsImage = new Proxy({"src":"/_astro/inputs.DTnfsUl8.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/html/inputs.png";
							}
							
							return target[name];
						}
					});

export { formImage as f, inputsImage as i };
