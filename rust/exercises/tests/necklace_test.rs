#[test]
fn same() {
    assert_eq!(exercises::necklace::is_same("nicole", "icolen"), true);
}

#[test]
fn not_same() {
    assert_eq!(exercises::necklace::is_same("nicole", "coneli"), false);
}

#[test]
fn same_long() {
    assert_eq!(
        exercises::necklace::is_same("aabaaaaabaab", "aabaabaabaaa"),
        true
    );
}

#[test]
fn not_same_long() {
    assert_eq!(
        exercises::necklace::is_same("baabaaaaabaab", "aabaabaabaaa"),
        false
    );
}

#[test]
fn single() {
    assert_eq!(exercises::necklace::is_same("x", "x"), true);
}

#[test]
fn mismatch() {
    assert_eq!(exercises::necklace::is_same("x", "xx"), false);
}

#[test]
fn mismatch_empty() {
    assert_eq!(exercises::necklace::is_same("x", ""), false);
}

#[test]
fn empty() {
    assert_eq!(exercises::necklace::is_same("", ""), true);
}
