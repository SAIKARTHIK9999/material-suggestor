import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class InAppWebPage extends StatefulWidget {
  const InAppWebPage({super.key});

  @override
  State<InAppWebPage> createState() => _InAppWebPageState();
}

class _InAppWebPageState extends State<InAppWebPage> {
  final controller = WebViewController()
  ..setJavaScriptMode(JavaScriptMode.unrestricted)
  ..loadRequest(Uri.parse('https://material-suggestor.netlify.app'));
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: WebViewWidget(controller: controller),
      ),
    );
  }
}
