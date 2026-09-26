package fourslash_test

import (
	"testing"

	"github.com/microsoft/TypeScript/tsc/internal/core"
	"github.com/microsoft/TypeScript/tsc/internal/fourslash"
	"github.com/microsoft/TypeScript/tsc/internal/ls/lsutil"
	"github.com/microsoft/TypeScript/tsc/internal/testutil"
)

// Shorthand property access (`{ a.b.c }`) has no dedicated language service support yet;
// this only checks that common requests handle it without crashing or reporting errors.
func TestShorthandPropertyAccessNoCrash(t *testing.T) {
	t.Parallel()
	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `declare const a: { b: { c: string } };
declare function f(): { x: number };
const o = { /*1*/a./*2*/b./*3*/c, (f())./*4*/x };
o./*5*/c;
o./*6*/x;
class C {
    value = 1;
    get() {
        return { this./*7*/value };
    }
}`
	f, done := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	defer done()
	f.VerifyNoErrors(t)
	f.VerifyBaselineHover(t)
	f.VerifyBaselineGoToDefinition(t, true, "1", "2", "3", "4", "5", "6", "7")
	f.VerifyBaselineFindAllReferences(t, "3", "5")
	f.VerifyBaselineDocumentHighlights(t, nil /*preferences*/, "3", "5")
	f.VerifyBaselineDocumentSymbol(t)
	f.VerifyBaselineSelectionRanges(t)
	f.VerifyBaselineInlayHints(t, nil /*span*/, &lsutil.UserPreferences{InlayHints: lsutil.InlayHintsPreferences{IncludeInlayPropertyDeclarationTypeHints: core.TSTrue, IncludeInlayVariableTypeHints: core.TSTrue}})
	f.FormatDocument(t, "")
	f.VerifyCurrentFileContent(t, `declare const a: { b: { c: string } };
declare function f(): { x: number };
const o = { a.b.c, (f()).x };
o.c;
o.x;
class C {
    value = 1;
    get() {
        return { this.value };
    }
}`)
}
