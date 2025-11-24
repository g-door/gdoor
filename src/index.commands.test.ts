	it("exposes login alias", () => {
		const names = index.program.commands.map((c) => c.name());
		expect(names).toContain("login");
		expect(names).toContain("web:login");
	});
