const conflicts = new Proxy({"src":"/_astro/conflicts.CPUXrJoP.png","width":700,"height":326,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/waiyanphyoaung/code/waiyanphyoaung/src/assets/git-course/conflicts.png";
							}
							
							return target[name];
						}
					});

export { conflicts as c };
