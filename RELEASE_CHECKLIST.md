# Release Checklist

Complete this checklist before releasing a new version of Barcalive.

---

## 📋 Pre-Release Tasks

### Code Quality
- [ ] All unit tests pass: `./gradlew test`
- [ ] Lint checks pass: `./gradlew lint`
- [ ] No compiler warnings
- [ ] Code review completed by at least 1 person
- [ ] No TODOs or FIXMEs in release branch

### Testing
- [ ] Build tested locally on emulator
- [ ] Debug APK tested on physical Android device
- [ ] Tested on Android API 24 (minSdk)
- [ ] Tested on Android API 36 (targetSdk)
- [ ] All features manually tested:
  - [ ] Login/Authentication
  - [ ] Room browsing and joining
  - [ ] Chat messaging
  - [ ] Gift sending
  - [ ] Agency management
  - [ ] Wallet/coin system
  - [ ] Mission tracking
  - [ ] Settings and profile

### Dependencies
- [ ] Dependencies up to date: `./gradlew dependencyUpdates`
- [ ] No known security vulnerabilities in dependencies
- [ ] Gradle wrapper updated if needed

### Documentation
- [ ] README.md is up to date
- [ ] DEPLOYMENT_GUIDE.md reflects current process
- [ ] CHANGELOG.md updated with new features and fixes
- [ ] API documentation updated (if applicable)
- [ ] Release notes prepared (RELEASE_NOTES_TEMPLATE.md)

---

## 🔧 Version Update

- [ ] Version code incremented in `build.gradle.kts`
  ```
  versionCode = [NEW_NUMBER]  // e.g., 1 → 2
  versionName = "[VERSION]"   // e.g., "1.0.0" → "1.1.0"
  ```
- [ ] Commit: `git add build.gradle.kts && git commit -m "chore: bump version to v[VERSION]"`

---

## 🔐 Security Check

- [ ] No hardcoded API keys in code
- [ ] `.env` file added to `.gitignore`
- [ ] No secrets in Git history
- [ ] All GitHub Secrets configured:
  - [ ] GEMINI_API_KEY
  - [ ] STRIPE_SECRET_KEY
  - [ ] KEYSTORE_BASE64 (if release)
  - [ ] KEYSTORE_PASSWORD (if release)
  - [ ] KEY_PASSWORD (if release)
- [ ] Secrets are current and valid
- [ ] No hardcoded passwords or tokens

---

## 📦 Build Verification

### Local Debug Build
```bash
./gradlew clean assembleDebug
```
- [ ] Build succeeds without errors
- [ ] APK location: `app/build/outputs/apk/debug/app-debug.apk`
- [ ] APK installs on device without errors
- [ ] App launches and loads splash screen
- [ ] No crashes on startup

### Local Release Build (Optional)
```bash
export KEYSTORE_PATH="./my-upload-key.jks"
export STORE_PASSWORD="your_password"
export KEY_PASSWORD="your_password"
./gradlew clean assembleRelease
```
- [ ] Build succeeds without errors
- [ ] APK location: `app/build/outputs/apk/release/app-release.apk`
- [ ] APK is signed and valid
- [ ] Smaller file size than debug APK

---

## 🏷️ Git Operations

### Create Release Tag
```bash
git tag -a v[VERSION] -m "Release v[VERSION]: [description]"
```
- [ ] Tag name follows semantic versioning (v1.0.0)
- [ ] Tag message is descriptive
- [ ] Example: `git tag -a v1.0.0 -m "Release v1.0.0: Initial release with auth, rooms, and wallet"`

### Push to GitHub
```bash
git push origin v[VERSION]
```
- [ ] Tag pushed successfully to GitHub
- [ ] GitHub Actions workflow triggered automatically
- [ ] Check Actions tab for build status

---

## ✅ GitHub Actions Verification

After pushing tag, monitor the workflow:

1. Go to repo: **Actions** tab
2. Select **Build & Deploy APK** workflow
3. Monitor the build:
   - [ ] Build job completes successfully ✅
   - [ ] Test job passes ✅
   - [ ] Lint checks pass ✅
   - [ ] Release created automatically ✅
   - [ ] APK attached to release ✅

### If Build Fails
- [ ] Check workflow logs for error details
- [ ] Fix issues and push new commit
- [ ] Create new tag if major changes needed

---

## 📝 Release Notes

- [ ] Release notes title: `Barcalive v[VERSION]`
- [ ] Release notes include:
  - [ ] Summary of changes
  - [ ] List of new features
  - [ ] List of bug fixes
  - [ ] Known issues (if any)
  - [ ] Migration guides (if needed)
- [ ] Release notes in Markdown format
- [ ] Release marked as latest release
- [ ] Release marked as pre-release (if beta) - otherwise uncheck

---

## 🎯 Distribution

### GitHub Releases
- [ ] Release visible on [Releases](https://github.com/kemal501/Barcalive/releases) page
- [ ] APK automatically attached to release
- [ ] Release notes displayed correctly
- [ ] Download link working

### Optional Distributions
- [ ] APK uploaded to Firebase App Distribution (if applicable)
- [ ] APK uploaded to Google Play Console (if applicable)
- [ ] Release announcement posted (if applicable)
  - [ ] Twitter/Social media
  - [ ] Email to testers
  - [ ] Community forums

---

## 🔄 Post-Release

### Monitoring
- [ ] Monitor crash reports for first 24 hours
- [ ] Check user feedback and issues
- [ ] Monitor performance metrics
- [ ] Verify analytics integration

### Cleanup
- [ ] Create next development branch if needed
- [ ] Update milestone tracking
- [ ] Archive old artifacts if needed
- [ ] Close related GitHub issues

### Documentation
- [ ] Add release to version history
- [ ] Update download links
- [ ] Announce on documentation site
- [ ] Update FAQ with new features

---

## 🚨 Rollback Plan

If critical issues found post-release:

1. **Immediate Actions**
  - [ ] Identify and document the issue
  - [ ] Notify users if critical
  - [ ] Disable app distribution temporarily if needed

2. **Fix & Re-release**
  - [ ] Create hotfix branch from release tag
  - [ ] Fix issue with commit: `git commit -m "hotfix: fix critical issue"`
  - [ ] Create new tag: `v[VERSION]-hotfix1`
  - [ ] Repeat release process

3. **Communication**
  - [ ] Document what was fixed
  - [ ] Explain why it was missed
  - [ ] Update users on timeline

---

## ✨ Sign-Off

- [ ] Release Manager: __________________ Date: __________
- [ ] QA Tester: __________________ Date: __________
- [ ] Product Owner: __________________ Date: __________

---

## 📞 Contact

For release-related questions:
- Create an issue: [GitHub Issues](https://github.com/kemal501/Barcalive/issues)
- Review deployment guide: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- Review secrets setup: [SECRETS_SETUP.md](./SECRETS_SETUP.md)
