// ========================== KeySnail Init File =========================== //

// この領域は, GUI により設定ファイルを生成した際にも引き継がれます
// 特殊キー, キーバインド定義, フック, ブラックリスト以外のコードは, この中に書くようにして下さい
// ========================================================================= //
//{{%PRESERVE%
// ここにコードを入力して下さい

//>|javascript|
//plugins.options["metaplus.metakeys"] = ["<convert>"];
//||<

key.setEditKey(["C-c", "e"], function (ev, arg) {
    ext.exec("edit_text", arg, ev);
}, "外部エディタで編集", true);
	
//}}%PRESERVE%
// ========================================================================= //

// ========================= Special key settings ========================== //

key.quitKey              = "C-g";
key.helpKey              = "<f1>";
key.escapeKey            = "C-q";
key.macroStartKey        = "<f3>";
key.macroEndKey          = "<f4>";
key.universalArgumentKey = "C-t";
key.negativeArgument1Key = "C--";
key.negativeArgument2Key = "C-M--";
key.negativeArgument3Key = "M--";
key.suspendKey           = "<f2>";

// ================================= Hooks ================================= //

hook.setHook('KeyBoardQuit', function (aEvent) {
    if (key.currentKeySequence.length) return;

    command.closeFindBar();

    let marked = command.marked(aEvent);

    if (util.isCaretEnabled()) {
        if (marked) {
            command.resetMark(aEvent);
        } else {
            if ("blur" in aEvent.target) aEvent.target.blur();

            gBrowser.focus();
            _content.focus();
        }
    } else {
        goDoCommand("cmd_selectNone");
    }

    if (KeySnail.windowType === "navigator:browser" && !marked) {
        key.generateKey(aEvent.originalTarget, KeyEvent.DOM_VK_ESCAPE, true);
    }
});


// ============================= Key bindings ============================== //

key.setGlobalKey([['C-M-r'], ['<convert>', 'r'], ['ESC', 'r']], function (ev) {
                userscript.reload();
            }, '設定ファイルを再読み込み', true);

key.setGlobalKey([['<convert>', 'n'], ['M-<up>'], ['ESC', '<up>']], function (ev, arg) {
    shell.input(null, arg);
}, 'コマンドの実行', true);

key.setGlobalKey([['M-x'], ['ESC', 'x']], function (ev, arg) {
                ext.select(arg, ev);
            }, 'エクステ一覧表示', true);

key.setGlobalKey([['M-:'], ['ESC', ':']], function (ev) {
                command.interpreter();
            }, 'JavaScript のコードを評価', true);

key.setGlobalKey(['<f1>', 'b'], function (ev) {
                key.listKeyBindings();
            }, 'キーバインド一覧を表示');

key.setGlobalKey(['<f1>', 'F'], function (ev) {
                openHelpLink("firefox-help");
            }, 'Firefox のヘルプを表示');

key.setGlobalKey('C-m', function (ev) {
                key.generateKey(ev.originalTarget, KeyEvent.DOM_VK_RETURN, true);
            }, 'リターンコードを生成');

key.setGlobalKey(['C-x', '1'], function (ev) {
                window.loadURI(ev.target.ownerDocument.location.href);
            }, '現在のフレームだけを表示', true);

key.setGlobalKey(['C-x', 'l'], function (ev) {
                command.focusToById("urlbar");
            }, 'ロケーションバーへフォーカス', true);

key.setGlobalKey([['C-x', 'g'], ['C-f']], function (ev) {
                command.focusToById("searchbar");
            }, '検索バーへフォーカス', true);

key.setGlobalKey(['C-x', 't'], function (ev) {
                command.focusElement(command.elementsRetrieverTextarea, 0);
            }, '最初のインプットエリアへフォーカス', true);

key.setGlobalKey(['C-x', 's'], function (ev) {
                command.focusElement(command.elementsRetrieverButton, 0);
            }, '最初のボタンへフォーカス', true);

key.setGlobalKey([['C-x', 'k'], ['C-7'], ['C-d']], function (ev) {
                BrowserCloseTabOrWindow();
            }, 'タブ / ウィンドウを閉じる');

key.setGlobalKey(['C-x', 'K'], function (ev) {
                closeWindow(true);
            }, 'ウィンドウを閉じる');

key.setGlobalKey(['C-x', 'n'], function (ev) {
                OpenBrowserWindow();
            }, 'ウィンドウを開く');

key.setGlobalKey(['C-x', 'C-c'], function (ev) {
                goQuitApplication();
            }, 'Firefox を終了', true);

key.setGlobalKey(['C-x', 'o'], function (ev, arg) {
                command.focusOtherFrame(arg);
            }, '次のフレームを選択');

key.setGlobalKey([['C-x', 'C-f'], ['M-f'], ['ESC', 'f']], function (ev) {
                BrowserOpenFileWindow();
            }, 'ファイルを開く', true);

key.setGlobalKey(['C-x', 'C-s'], function (ev) {
                saveDocument(window.content.document);
            }, 'Save File', true);

key.setGlobalKey([['M-w'], ['ESC', 'w']], function (ev) {
                command.copyRegion(ev);
            }, '選択中のテキストをコピー', true);

key.setGlobalKey('C-s', function (ev) {
                command.iSearchForwardKs(ev);
            }, 'Emacs ライクなインクリメンタル検索', true);

key.setGlobalKey('C-r', function (ev) {
                command.iSearchBackwardKs(ev);
            }, 'Emacs ライクな逆方向インクリメンタル検索', true);

key.setGlobalKey(['C-c', 'u'], function (ev) {
                undoCloseTab();
            }, '閉じたタブを元に戻す');

key.setGlobalKey(['C-c', 'C-c', 'C-v'], function (ev) {
                toJavaScriptConsole();
            }, 'Javascript コンソールを表示', true);

key.setGlobalKey(['C-c', 'C-c', 'C-c'], function (ev) {
                command.clearConsole();
            }, 'Javascript コンソールの表示をクリア', true);

key.setGlobalKey('C-9', function (ev) {
                getBrowser().mTabContainer.advanceSelectedTab(1, true);
            }, 'ひとつ右のタブへ');

key.setGlobalKey('C-8', function (ev) {
                getBrowser().mTabContainer.advanceSelectedTab(-1, true);
            }, 'ひとつ左のタブへ');

key.setGlobalKey('C-n', function (ev) {
    BrowserBack();
}, '戻る');

key.setGlobalKey('C-p', function (ev) {
    BrowserForward();
}, '進む');

key.setGlobalKey(['ESC', 'ESC'], function (ev, arg) {
            ev.originalTarget.dispatchEvent(key.stringToKeyEvent("ESC", true));
        }, 'Dispatch ESC');

key.setGlobalKey('C-;', function (ev) {
    BrowserOpenTab();
}, 'タブを開く');

key.setGlobalKey(['C-c', 'l'], function (ev, arg) {
    command.setClipboardText("\[\[" + content.location.href + "\]\["
                             + content.document.title + "\]\]");
}, 'copy_document_title_and_url_for_org');

key.setGlobalKey(['C-c', 't'], function (ev, arg) {
    command.setClipboardText("\\href\{" + content.location.href + "\}\{"
                             + content.document.title + "\}");
}, 'copy_document_title_and_url_for_latex');

key.setViewKey('8', function (ev) {
                getBrowser().mTabContainer.advanceSelectedTab(-1, true);
            }, 'ひとつ左のタブへ');

key.setViewKey('9', function (ev) {
                getBrowser().mTabContainer.advanceSelectedTab(1, true);
            }, 'ひとつ右のタブへ');

key.setViewKey([['C-k'], ['k']], function (ev) {
                key.generateKey(ev.originalTarget, KeyEvent.DOM_VK_DOWN, true);
            }, '一行スクロールダウン');

key.setViewKey([['C-i'], ['i']], function (ev) {
                key.generateKey(ev.originalTarget, KeyEvent.DOM_VK_UP, true);
            }, '一行スクロールアップ');

key.setViewKey([['C-l'], ['l']], function (ev) {
                key.generateKey(ev.originalTarget, KeyEvent.DOM_VK_RIGHT, true);
            }, '右へスクロール');

key.setViewKey([['C-j'], ['j']], function (ev) {
                key.generateKey(ev.originalTarget, KeyEvent.DOM_VK_LEFT, true);
            }, '左へスクロール');

key.setViewKey([['C-,'], [',']], function (ev) {
                goDoCommand("cmd_scrollPageUp");
            }, '一画面分スクロールアップ');

key.setViewKey([['C-.'], ['.']], function (ev) {
                goDoCommand("cmd_scrollPageDown");
            }, '一画面スクロールダウン');

key.setViewKey([['C-u'], ['u']], function (ev) {
                goDoCommand("cmd_scrollTop");
            }, 'ページ先頭へ移動', true);

key.setViewKey([['C-o'], ['o']], function (ev) {
                goDoCommand("cmd_scrollBottom");
            }, 'ページ末尾へ移動', true);

key.setViewKey(':', function (ev, arg) {
                shell.input(null, arg);
            }, 'コマンドの実行', true);

key.setViewKey('R', function (ev) {
                BrowserReload();
            }, '更新', true);

key.setViewKey('n', function (ev) {
                BrowserBack();
            }, '戻る');

key.setViewKey('p', function (ev) {
                BrowserForward();
            }, '進む');

key.setViewKey('q', function (ev) {
                BrowserCloseTabOrWindow();
            }, 'タブ / ウィンドウを閉じる');

key.setViewKey('U', function (ev) {
                undoCloseTab();
            }, '閉じたタブを元に戻す');

key.setViewKey('C-a', function (ev) {
                goDoCommand("cmd_selectAll");
            }, 'すべて選択', true);

key.setViewKey('f', function (ev) {
                command.focusElement(command.elementsRetrieverTextarea, 0);
            }, '最初のインプットエリアへフォーカス', true);

key.setViewKey([['M-p'], ['ESC', 'p']], function (ev) {
                command.walkInputElement(command.elementsRetrieverButton, true, true);
            }, '次のボタンへフォーカスを当てる');

key.setViewKey([['M-n'], ['ESC', 'n']], function (ev) {
                command.walkInputElement(command.elementsRetrieverButton, false, true);
            }, '前のボタンへフォーカスを当てる');

key.setViewKey('N', function (ev) {
    BrowserOpenTab();
}, 'タブを開く');

key.setViewKey([['e'], ['C-e']], function (aEvent, aArg) {
    ext.exec("hok-start-foreground-mode", aArg);
}, 'Hit a Hint を開始', true);

key.setViewKey('E', function (aEvent, aArg) {
    ext.exec("hok-start-background-mode", aArg);
}, 'リンクをバックグラウンドで開く Hit a Hint を開始', true);

key.setViewKey(';', function (aEvent, aArg) {
    ext.exec("hok-start-extended-mode", aArg);
}, 'HoK - 拡張ヒントモード', true);

key.setViewKey(['C-c', 'C-e'], function (aEvent, aArg) {
    ext.exec("hok-start-continuous-mode", aArg);
}, 'リンクを連続して開く Hit a Hint を開始', true);

key.setViewKey('SPC', function (ev) {
    BrowserBack();
}, '戻る');

key.setViewKey(['ESC', 'ESC'], function (ev, arg) {
            ev.originalTarget.dispatchEvent(key.stringToKeyEvent("ESC", true));
        }, 'Dispatch ESC');

key.setEditKey(['C-c', 'e'], function (ev, arg) {
    ext.exec("edit_text", arg, ev);
}, '外部エディタで編集', true);

key.setEditKey(['C-x', 'h'], function (ev) {
                command.selectAll(ev);
            }, '全て選択', true);

key.setEditKey([['C-x', 'u'], ['C-/']], function (ev) {
                display.echoStatusBar("Undo!", 2000);
                goDoCommand("cmd_undo");
            }, 'アンドゥ');

key.setEditKey(['C-x', 'r', 'd'], function (ev, arg) {
                command.replaceRectangle(ev.originalTarget, "", false, !arg);
            }, '矩形削除', true);

key.setEditKey(['C-x', 'r', 't'], function (ev) {
                prompt.read("String rectangle: ", function (aStr, aInput) {
                                command.replaceRectangle(aInput, aStr);
                            },
                            ev.originalTarget);
            }, '矩形置換', true);

key.setEditKey(['C-x', 'r', 'o'], function (ev) {
                command.openRectangle(ev.originalTarget);
            }, '矩形行空け', true);

key.setEditKey(['C-x', 'r', 'k'], function (ev, arg) {
                command.kill.buffer = command.killRectangle(ev.originalTarget, !arg);
            }, '矩形キル', true);

key.setEditKey(['C-x', 'r', 'y'], function (ev) {
                command.yankRectangle(ev.originalTarget, command.kill.buffer);
            }, '矩形ヤンク', true);

key.setEditKey(['C-x', 'C-k'], function (ev) {
                command.killLine(ev);
            }, 'カーソルから先を一行カット (Kill line)');

key.setEditKey([['C-SPC'], ['<pause>']], function (ev) {
                command.setMark(ev);
            }, 'マークをセット', true);

key.setEditKey('C-o', function (ev) {
                command.endLine(ev);
            }, '行末へ');

key.setEditKey('C-\\', function (ev) {
                display.echoStatusBar("Redo!", 2000);
                goDoCommand("cmd_redo");
            }, 'リドゥ');

key.setEditKey('C-u', function (ev) {
                command.beginLine(ev);
            }, '行頭へ移動');

key.setEditKey('C-l', function (ev) {
                command.nextChar(ev);
            }, '一文字右へ移動');

key.setEditKey('C-j', function (ev) {
                command.previousChar(ev);
            }, '一文字左へ移動');

key.setEditKey('C-M-l', function (ev) {
                command.forwardWord(ev);
            }, '一単語右へ移動');

key.setEditKey([['C-M-j'], ['ESC', 'j']], function (ev) {
                command.backwardWord(ev);
            }, '一単語左へ移動');

key.setEditKey('C-k', function (ev) {
                command.nextLine(ev);
            }, '一行下へ');

key.setEditKey('C-i', function (ev) {
                command.previousLine(ev);
            }, '一行上へ');

key.setEditKey('C-v', function (ev) {
                command.pageDown(ev);
            }, '一画面分下へ');

key.setEditKey([['M-v'], ['ESC', 'v']], function (ev) {
                command.pageUp(ev);
            }, '一画面分上へ');

key.setEditKey([['M-<'], ['ESC', '<']], function (ev) {
                command.moveTop(ev);
            }, 'テキストエリア先頭へ');

key.setEditKey([['M->'], ['ESC', '>']], function (ev) {
                command.moveBottom(ev);
            }, 'テキストエリア末尾へ');

key.setEditKey('C-d', function (ev) {
                goDoCommand("cmd_deleteCharForward");
            }, '次の一文字削除');

key.setEditKey('C-h', function (ev) {
                goDoCommand("cmd_deleteCharBackward");
            }, '前の一文字を削除');

key.setEditKey([['M-d'], ['ESC', 'd']], function (ev) {
                command.deleteForwardWord(ev);
            }, '次の一単語を削除');

key.setEditKey([['C-M-h'], ['M-<delete>'], ['ESC', 'h'], ['ESC', '<delete>']], function (ev) {
                command.deleteBackwardWord(ev);
            }, '前の一単語を削除');

key.setEditKey([['M-u'], ['ESC', 'u']], function (ev, arg) {
                command.wordCommand(ev, arg, command.upcaseForwardWord, command.upcaseBackwardWord);
            }, '次の一単語を全て大文字に (Upper case)');

key.setEditKey([['M-l'], ['ESC', 'l']], function (ev, arg) {
                command.wordCommand(ev, arg, command.downcaseForwardWord, command.downcaseBackwardWord);
            }, '次の一単語を全て小文字に (Lower case)');

key.setEditKey([['M-c'], ['ESC', 'c']], function (ev, arg) {
                command.wordCommand(ev, arg, command.capitalizeForwardWord, command.capitalizeBackwardWord);
            }, '次の一単語をキャピタライズ');

key.setEditKey('C-y', command.yank, '貼り付け (Yank)');

key.setEditKey('M-y', command.yankPop, '古いクリップボードの中身を順に貼り付け (Yank pop)', true);

key.setEditKey([['C-M-y'], ['ESC', 'y']], function (ev) {
                if (!command.kill.ring.length)
                    return;

                let ct = command.getClipboardText();
                if (!command.kill.ring.length || ct != command.kill.ring[0]) {
                    command.pushKillRing(ct);
                }

                prompt.selector(
                    {
                        message: "Paste:",
                        collection: command.kill.ring,
                        callback: function (i) { if (i >= 0) key.insertText(command.kill.ring[i]); }
                    }
                );
            }, '以前にコピーしたテキスト一覧から選択して貼り付け', true);

key.setEditKey('C-w', function (ev) {
                goDoCommand("cmd_copy");
                goDoCommand("cmd_delete");
                command.resetMark(ev);
            }, '選択中のテキストを切り取り (Kill region)', true);

key.setEditKey([['M-n'], ['ESC', 'n']], function (ev) {
                command.walkInputElement(command.elementsRetrieverTextarea, true, true);
            }, '次のテキストエリアへフォーカス');

key.setEditKey([['M-p'], ['ESC', 'p']], function (ev) {
    command.walkInputElement(command.elementsRetrieverTextarea, false, true);
}, '前のテキストエリアへフォーカス');

key.setEditKey(['ESC', 'ESC'], function (ev, arg) {
            ev.originalTarget.dispatchEvent(key.stringToKeyEvent("ESC", true));
        }, 'Dispatch ESC');

key.setCaretKey([['C-u'], ['u']], function (ev) {
    ev.target.ksMarked ? goDoCommand("cmd_selectBeginLine") : goDoCommand("cmd_beginLine");
            }, 'キャレットを行頭へ移動');

key.setCaretKey([['C-o'], ['o'], ['M->'], ['G'], ['ESC', '>']], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectEndLine") : goDoCommand("cmd_endLine");
            }, 'キャレットを行末へ移動');

key.setCaretKey([['C-k'], ['k']], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectLineNext") : goDoCommand("cmd_scrollLineDown");
            }, 'キャレットを一行下へ');

key.setCaretKey([['C-i'], ['i']], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectLinePrevious") : goDoCommand("cmd_scrollLineUp");
            }, 'キャレットを一行上へ');

key.setCaretKey([['C-l'], ['l']], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectCharNext") : goDoCommand("cmd_scrollRight");
            }, 'キャレットを一文字右へ移動');

key.setCaretKey([['C-j'], ['j'], ['C-h']], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectCharPrevious") : goDoCommand("cmd_scrollLeft");
            }, 'キャレットを一文字左へ移動');

key.setCaretKey([['C-M-l'], ['w'], ['ESC', 'f']], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectWordNext") : goDoCommand("cmd_wordNext");
            }, 'キャレットを一単語右へ移動');

key.setCaretKey([['C-M-j'], ['W'], ['ESC', 'b']], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectWordPrevious") : goDoCommand("cmd_wordPrevious");
            }, 'キャレットを一単語左へ移動');

key.setCaretKey([['C-.'], ['SPC']], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectPageNext") : goDoCommand("cmd_movePageDown");
            }, 'キャレットを一画面分下へ');

key.setCaretKey([['C-,'], ['b'], ['ESC', 'v']], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectPagePrevious") : goDoCommand("cmd_movePageUp");
            }, 'キャレットを一画面分上へ');

key.setCaretKey([['M-<'], ['g'], ['ESC', '<']], function (ev) {
                ev.target.ksMarked ? goDoCommand("cmd_selectTop") : goDoCommand("cmd_scrollTop");
            }, 'キャレットをページ先頭へ移動');

key.setCaretKey('J', function (ev) {
                util.getSelectionController().scrollLine(true);
            }, '画面を一行分下へスクロール');

key.setCaretKey('K', function (ev) {
                util.getSelectionController().scrollLine(false);
            }, '画面を一行分上へスクロール');

key.setCaretKey(',', function (ev) {
                util.getSelectionController().scrollHorizontal(true);
                goDoCommand("cmd_scrollLeft");
            }, '左へスクロール');

key.setCaretKey('.', function (ev) {
                goDoCommand("cmd_scrollRight");
                    util.getSelectionController().scrollHorizontal(false);
            }, '右へスクロール');

key.setCaretKey('z', function (ev) {
                command.recenter(ev);
            }, 'キャレットの位置までスクロール');

key.setCaretKey([['C-SPC'], ['C-@']], function (ev) {
                command.setMark(ev);
            }, 'マークをセット', true);

key.setCaretKey(':', function (ev, arg) {
                shell.input(null, arg);
            }, 'コマンドの実行', true);

key.setCaretKey('R', function (ev) {
                BrowserReload();
            }, '更新', true);

key.setCaretKey('n', function (ev) {
                BrowserBack();
            }, '戻る');

key.setCaretKey('p', function (ev) {
                BrowserForward();
            }, '進む');

key.setCaretKey(['C-x', 'h'], function (ev) {
                goDoCommand("cmd_selectAll");
            }, 'すべて選択', true);

key.setCaretKey('f', function (ev) {
                command.focusElement(command.elementsRetrieverTextarea, 0);
            }, '最初のインプットエリアへフォーカス', true);

key.setCaretKey([['M-p'], ['ESC', 'p']], function (ev) {
                command.walkInputElement(command.elementsRetrieverButton, true, true);
            }, '次のボタンへフォーカスを当てる');

key.setCaretKey([['M-n'], ['ESC', 'n']], function (ev) {
                command.walkInputElement(command.elementsRetrieverButton, false, true);
            }, '前のボタンへフォーカスを当てる');

key.setCaretKey(['ESC', 'ESC'], function (ev, arg) {
            ev.originalTarget.dispatchEvent(key.stringToKeyEvent("ESC", true));
        }, 'Dispatch ESC');

