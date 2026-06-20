# Release Notes Template

Use this template when creating new releases. Copy and fill it out for each version.

## Version: [VERSION_NUMBER]
**Release Date**: [DATE]  
**Build Number**: [BUILD_NUMBER]

---

## 🎉 What's New

### ✨ Features
- [ ] Feature 1: Description
- [ ] Feature 2: Description
- [ ] Feature 3: Description

### 🐛 Bug Fixes
- [ ] Bug fix 1: Description
- [ ] Bug fix 2: Description

### 🔄 Improvements
- [ ] Performance improvement 1
- [ ] UI/UX enhancement 1

### ⚠️ Breaking Changes
- None / Describe any breaking changes

---

## 📊 Release Stats

| Metric | Value |
|--------|-------|
| Build Time | [TIME] |
| APK Size | [SIZE] |
| Min SDK | 24 |
| Target SDK | 36 |
| Tested Devices | [LIST] |

---

## 🔒 Security & Performance

- [ ] All API keys secured in GitHub Secrets
- [ ] Code linting passed
- [ ] Unit tests passed
- [ ] Performance benchmarks reviewed

---

## 📝 Installation Instructions

### Via APK Direct Install
1. Download `app-release.apk`
2. On Android device: Settings → Security → Enable "Unknown sources"
3. Copy APK to device and open to install
4. Or use: `adb install -r app-release.apk`

### Via Google Play Store
[Add store link here]

### Via Firebase Distribution
[Add distribution link here]

---

## 🔗 Related Links

- **GitHub Release**: [Link]
- **Commits in this Release**: [Link]
- **Previous Release**: [Link]
- **Issues Resolved**: [#123, #124, #125]

---

## 👥 Contributors

- @kemal501 - Lead Developer

---

## 📞 Feedback

Please report issues: [GitHub Issues](https://github.com/kemal501/Barcalive/issues)

---

## 📋 Checklist Before Publishing

- [ ] Version number updated in `build.gradle.kts`
- [ ] Release notes filled out
- [ ] APK tested on multiple devices
- [ ] All secrets are properly configured
- [ ] Git tag created: `git tag v[VERSION]`
- [ ] Changes pushed: `git push origin v[VERSION]`
